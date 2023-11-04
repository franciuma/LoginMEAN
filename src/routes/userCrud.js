const { Router } = require('express')
const router = Router()

// Importar Schemas
const User = require('../models/userSchema')

router.get('/usuarios', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    console.error('Error mostrando usuarios ', error)
    res.status(500).json({ error: 'Error mostrando usuarios' })
  }
})

module.exports = router
