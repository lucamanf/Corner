const router = require('express').Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
let User = require('../models/user');

require('../passportConfig')(passport);

router.route('/register').post((req, res) => {
    
    User.findOne({email: req.body.email}, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const email = req.body.email;
            const nome = req.body.nome;
            const cognome = req.body.cognome;
            const password = req.body.password;
        
            const hashedPassword = await bcrypt.hash(password, 10);
        
            const newUser = new User({
                email: email, 
                password: hashedPassword,
                nome: nome,
                cognome: cognome,
                ruolo: "docente"
            });
        
            newUser.save()
                .then(() => res.json('User added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        }
    })

});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/users/login',
      failureFlash: true
    })(req, res, next);
  });



module.exports = router;