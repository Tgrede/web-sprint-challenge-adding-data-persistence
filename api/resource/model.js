// build your `Resource` model here
const db = require('../../data/dbConfig')


const getAll = () => {
  console.log('model function reached')
  return db('resources')
}

const create = (resource) => {
  return db('resources').insert(resource)
  .then(([id]) => {
    return db('resources').where('resource_id', id).first()
  })
}

module.exports = {
  getAll,
  create
}