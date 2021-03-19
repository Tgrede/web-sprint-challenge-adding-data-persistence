// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')
const router = express.Router()


router.get('/', async (req, res, next) => {
  try{
    const data = await Projects.getAll()
    res.json(data)
  }catch(err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    const newProject = await Projects.create(req.body)
    res.json(newProject)
  } catch(err) {
    next(err)
  }
})

module.exports = router