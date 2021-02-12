const express = require('express')
const router = express.Router()
const Test = require('../models/model')
const blog = require('../models/model')

router.get('/', async (req, res) => {
	// try {
	// 	const tests = await test.find({ author: "Homer" })
  //   res.json(tests)
  // } catch (err) {
  //   res.status(500).json({ message: err.message })
  // }
	res.send("HO")
})

// router.get('/', async (req, res) => {
//     const blogs = await blog.find({ hi: "church" })
//     res.json(blogs)
//   } catch (err) {
//     res.status(500).json({ message: err.message })
//   }
// })

// Get one subscriber
router.get('/:id', (req, res) => {
})

router.post('/', async (req, res) => {
  const test = new Test({
    author: req.body.author,
  })

  try {
    const newtest = await test.save()
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
