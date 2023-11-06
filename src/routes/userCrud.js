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

router.get('/usuarios/:userId', async (req, res) => {
  const userId = req.params.userId
  try {
    const user = await User.findById(userId)
    res.json(user)
  } catch (error) {
    console.error('Error al buscar el usuario', error)
    res.status(500).json({ error: 'Error al buscar el usuario' })
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

router.put('/actualizar/:userId', async (req, res) => {
  const userId = req.params.userId
  const user = req.body
  try {
    await User.findByIdAndUpdate(userId, user)
    res.json({ message: 'Usuario actualizado correctamente' })
  } catch (error) {
    console.error('Error actualizando usuario')
    res.status(500).json({ error: 'Error actualizando usuario' })
  }
})

module.exports = router
