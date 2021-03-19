// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = () => {
  console.log('model function reached')
  return db('projects')
}

const create = (project) => {
  return db('projects').insert(project)
  .then(([id]) => {
    return db('projects').where('project_id', id).first()
  })
}


module.exports = {
  getAll,
  create
}
