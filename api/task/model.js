// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = () => {
  console.log('model function reached')
  return db('tasks')
  .join('projects', 'tasks.project_id', 'projects.project_id')
  .select('tasks.task_id', 'tasks.task_description', 'tasks.task_notes', 'tasks.task_completed', 'projects.project_name', 'projects.project_description')
}


const create = (task) => {
  return db('tasks').insert(task)
  .then(([id]) => {
    return db('tasks').where('task_id', id).first()
  })
}


module.exports = {
  getAll,
  create
}
  