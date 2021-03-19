// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try{
    let data = await Tasks.getAll()
    data = data.map(task => {
      let formattedTask = {...task, task_completed: task.task_completed ? true: false }
      return formattedTask
    })

    res.json(data)
  }catch(err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    const taskToAdd = req.body
    const allTasks = await Tasks.getAll()
    const taskIds = allTasks.map(task =>{
      return task.project_id
    })
    if(!taskToAdd || taskIds.includes(taskToAdd.project_id)){
      res.status(400).json({message:"not valid"})
    }else{
      let newTask = await Tasks.create(req.body)
      newTask = {...newTask, task_completed: newTask.task_completed ? true: false }
      res.json(newTask)
    }

  } catch(err) {
    next(err)
  }
})


module.exports = router