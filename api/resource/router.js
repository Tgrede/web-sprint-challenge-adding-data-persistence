// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try{
    const data = await Resources.getAll()
    res.json(data)
  }catch(err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try{
    let newResource = await Resources.create(req.body)
    res.json(newResource)
  } catch(err) {
    next(err)
  }
})

module.exports = router