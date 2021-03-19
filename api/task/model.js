// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = () => {
  console.log('model function reached')
  return db('tasks')
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
