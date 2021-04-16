const router = require('express').Router();
let Project = require('../../models/project');
let Subject = require('../../models/subject');
const auth = require('../../middleware/auth');

// Post a project 

router.post('/add', auth, (req, res) => {

  const {titolo, materia, partecipanti, date, descrizione, contenuto, image_src} = req.body;


  //Controllo se materia può essere postata

  var found = false;
  for(var i = 0; i < req.user.materie.length; i++) {
      if (req.user.materie[i] == materia) {
          found = true;
          break;
      }
  }

  if (!found && req.user.ruolo != 'admin'){
    return res.status(403).json('Non hai i permessi per postare su questa materia');
  }


  if (req.body.updateId){
    Project.findByIdAndUpdate({_id: req.body.updateId}, 
      {
        titolo: titolo,
        materia: materia,
        image_src: image_src,
        contenuto: contenuto,
        descrizione: descrizione,
        date: date,
        partecipanti: partecipanti
      },
      { upsert: true },
      function (err, result) {
        if (err){
          return res.status(400).json("errore");
        } else {
          return res.json(result);
        }
      }
      )
      return 0;
  }
     

  const newProject = new Project({
    titolo,
    materia,
    partecipanti,
    date,
    descrizione,
    contenuto,
    image_src,
    created_by: req.user.id
  });

  newProject.save()
    .then(() => res.status(200).json("Project Added"))
    .catch(err => res.status(400).json('Error: ' + err))
    

});

// Get all projects

router.get('/getAll', (req, res) => {
  
  Project.find({}).populate("materia","-_id").populate("created_by","nome cognome -_id")
    .then((projects) =>{
      res.status(200).json(projects);
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

// Get all projects by subject

router.get('/getAllBySubject/:id', (req, res) => {
  
  Project.find({materia: req.params.id}).populate("materia","-_id").populate("created_by","nome cognome -_id")
    .then((projects) =>{
      res.status(200).json(projects);
    })
    .catch(err => res.status(400).json('Error: ' + err));

});

// Get all projects by teacher

router.get('/getAllByTeacher/:id', (req, res) => {
  console.log(req.params);
  Project.find({created_by: req.params.id}).populate("materia"," -_id").populate("created_by","nome cognome -_id")
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a project

router.delete('/deleteProject', auth, (req, res) => {

    //Controllo se materia può essere postata

    var found = false;
    for(var i = 0; i < req.user.materie.length; i++) {
        if (req.user.materie[i] == materia) {
            found = true;
            break;
        }
    }
  
    if (!found && req.user.ruolo != 'admin'){
      return res.status(403).json('Non hai i permessi per postare su questa materia');
    }

  Project.findByIdAndDelete(req.body.id, function (err, docs) {
    if (err){
        console.log(err);
        res.status(400).json('Errore');
    }
    else{
        console.log("Deleted : ", docs);
        res.json('deleted');
    }
});
});




module.exports = router;