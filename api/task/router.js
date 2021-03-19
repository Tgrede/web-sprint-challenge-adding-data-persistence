// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try{
    const data = await Tasks.getAll()
    res.json(data)
  }catch(err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    const newTask = await Tasks.create(req.body)
    res.json(newTask)
  } catch(err) {
    next(err)
  }
})


module.exports = router