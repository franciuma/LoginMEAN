const { Router } = require('express')
const router = Router()

// Importar Schemas
const User = require('../models/userSchema')

router.get('/usuarios', async (req, res) => {
  try {
    const users = await User.find().sort('role')
    res.json(users)
  } catch (error) {
    console.error('Error mostrando usuarios ', error)
    res.status(500).json({ error: 'Error mostrando usuarios' })
  }
})

router.get('/eliminar/:userId', async (req, res) => {
  const userId = req.params.userId
  try {
    await User.findByIdAndRemove(userId)
    res.json({ message: 'Usuario eliminado con éxito' })
  } catch (error) {
    console.error('Error eliminando al usuario con id ' + userId, error)
    res.status(500).json({ error: 'Error eliminando al usuario' })
  }
})

module.exports = router
