const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const User = require('../../models/user');
const mongoose = require('mongoose');

// @route    POST api/users
// @desc     Register user
// @access   Private
router.post(
  '/register',
  auth,
  check('nome', 'Name is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  check('materie', 'Insert Subject').isArray(),
  check('cognome', 'Please insert a surname').notEmpty(),
  async (req, res) => {
    console.log(req.user);
    if (req.user.ruolo == "docente"){
        return res.json("Errore, solo un admin può registrare utenti");
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nome, cognome, email, password, materie } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        nome,
        cognome,
        email,
        materie : [],
        password,
        ruolo: "docente"
      });

      const materiearray = materie;
      console.log(materiearray);

      for (let i = 0; i<materiearray.length; i++){
          materiearray[i] = mongoose.Types.ObjectId(materiearray[i]);
          user.materie.push(materiearray[i]);
      }


      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
          ruolo: "docente",
          materie: materiearray
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/getProfile',auth, (req,res) =>{
  User.find({_id: req.user.id},"-password -_id").populate("materie","-_id")
  .then(profile => res.status(200).json(profile))
  .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
