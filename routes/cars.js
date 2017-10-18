const express = require('express')
const router = express.Router()
module.exports = router

const queries = require('../db/queries')

router.get('/cars', (req, res) => {
  queries.cars.getAll()
  // We just asked for all of the data
  .then(data => {
    // This is where our data returns
    res.json(data)
  })
})
