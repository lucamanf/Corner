const express = require('express');
const Token = require('../../models/token');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const config = require('config');
const sendEmail = require('../../utils/emailSender.js');
const { check, validationResult } = require('express-validator');
const User = require('../../models/user');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id,
          ruolo: user.ruolo,
          materie: user.materie
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          console.log(user._id);
          const data = {"token":token,"id":user._id}
          res.json({data});
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);


router.post('/requestResetPassword', async (req, res) => {
  
  const user = await User.findOne({ email: req.body.email }).exec();

  if (!user){
    return res.status(400).json('Errore utente inesistente');
  }

  let token = await Token.findOne({ userId: user._id }).exec();
  if (token){
    await token.deleteOne();
  }

  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, 10);

  await new Token({
    userId: user._id,
    token: hash,
    createdAt: Date.now(),
  }).save();


  const link = `${process.env.CLIENT_URL}/passwordReset?token=${resetToken}&id=${user._id}`;
  sendEmail.send(req.body.email, "Reimposta password", "", "Clicca sul link seguente per ottenere una nuova password<br><a href= "+ link + ">Reset password</a>", "ResetPass");
  console.log(link);
  res.json('Email inviata');

})


router.post('/resetPassword', async (req, res)  => {

  const {userId, token, password} = req.body;

  let passwordResetToken = await Token.findOne({ userId });
  if (!passwordResetToken) {
    throw new Error("Invalid or expired password reset token");
  }
  const isValid = await bcrypt.compare(token, passwordResetToken.token);
  if (!isValid) {
    throw new Error("Invalid or expired password reset token");
  }
  const hash = await bcrypt.hash(password, 10);
  await User.updateOne(
    { _id: userId },
    { $set: { password: hash } },
    { new: true }
  );
  const user = await User.findById({ _id: userId });
  sendEmail.send(user.email, "Password reimpostata", "", "La password del tuo account è stata cambiata", "PasswordCambiata");
  await passwordResetToken.deleteOne();
  return res.json("Password Cambiata");
});

module.exports = router;
