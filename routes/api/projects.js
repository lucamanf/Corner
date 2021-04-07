const router = require('express').Router();
let Project = require('../../models/project');
let Subject = require('../../models/subject');
const auth = require('../../middleware/auth');

// Post a project 

router.post('/add', auth, (req, res) => {

  console.log(req.user);
    
  const {titolo, materia, partecipanti, date, descrizione, contenuto, image_src} = req.body;
  
  //Controllo se materia può essere postata

  var found = false;
  for(var i = 0; i < req.user.materie.length; i++) {
      if (req.user.materie[i] == materia) {
          found = true;
          break;
      }
  }

  if (!found){
    return res.status(403).json('Non hai i permessi per postare su questa materia');
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
    .then(() => res.json("Project Added"))
    .catch((err) => console.log(err));
    

});

// Get all projects

router.get('/getAll', (req, res) => {
  
  Project.aggregate([{
      $lookup: {
          from: "subjects",
          localField: "materia",
          foreignField: "_id",
          as: "nomemateria"
      }
  }],function(err,resp){
      let projects = resp;
      projects.forEach(project => {
        project.nomemateria = project.nomemateria[0].materia;
      })
      res.json(projects);
  });
})

// Get all projects by subject

router.get('/getAllBySubject', (req, res) => {
  
  Project.find({materia : req.body.id}).populate("materia")
    .then((resp) => {
      let projects = resp;
      projects.forEach(project => {
        project.materia = project.materia.materia;
      })
      res.json(projects);
    });

})




module.exports = router;