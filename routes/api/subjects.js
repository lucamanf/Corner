const router = require('express').Router();
let Subject = require('../../models/subject');

router.post('/add', (req, res) => {
    const materia = req.body.materia;
    const sede = req.body.sede;

    const newSubject = new Subject({
        materia,
        sede
    });

    newSubject.save()
        .then(() => res.json("Materia Aggiunta"))
        .catch(err => res.status(400).json('Error: ' + err));
  });

router.get("/get", (req, res) => {

    const materia = req.body.materia;
    const sede = req.body.sede;

    Subject.findOne({
        materia: materia,
        sede: sede
    }).then(subject => res.json(subject._id))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.get("/getById", (req, res) => {

    const id = req.body.id;

    Subject.findOne({
        _id: id
    }).then(subject => res.json(subject.materia))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.get("/getAll", (req, res) =>{
    Subject.find({})
    .then(subjects => res.json(subjects))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/getBySede',(req,res) =>{
    Subject.find({sede: req.body.sede})
    .then(subjects => res.json(subjects))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;