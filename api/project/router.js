// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')
const router = express.Router()


router.get('/', async (req, res, next) => {
  try{
    let data = await Projects.getAll()
    const newData = data.map(project => {
      let formattedProject = {...project, project_completed: project.project_completed ? true : false }
      return formattedProject
    }) 
    res.json(newData)
  }catch(err) {
    next(err)
  }
})
 
router.post('/', async (req, res, next) => {
  try{
    const projectToCheck = req.body

    if(!projectToCheck.project_name){
      res.status(500).json({message:'invalid project_name'})
    } else {
      let newProject = await Projects.create(req.body)

      newProject = {...newProject, project_completed: newProject.project_completed ? true: false }
  
      res.json(newProject)
    }


  } catch(err) {
    next(err)
  }
})

module.exports = router