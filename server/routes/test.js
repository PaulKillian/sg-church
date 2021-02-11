const express = require('express')
const router = express.Router()
const Test = require('../models/model')

router.get('/', async (req, res) => {
  try {
    const tests = await Test.find()
    res.json(tests)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get one subscriber
router.get('/:id', (req, res) => {
})

router.post('/', async (req, res) => {
  const tests = new Test({
    name: req.body.name,
    subscribedChannel: req.body.subscribedChannel
  })

  try {
    const newtest = await tests.save()
    res.status(201).json(newtest)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Create one subscriber
router.post('/', (req, res) => {
})

// Update one subscriber
router.patch('/:id', (req, res) => {
})

// Delete one subscriber
router.delete('/:id', (req, res) => {
})

module.exports = router
