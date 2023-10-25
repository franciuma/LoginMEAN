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

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const userDB = await User.findOne({ username })

  if (userDB && userDB.password === password) {
    res.send('Usuario Logueado correctamente')
  } else if (!userDB) {
    res.send('Usuario no existente')
  } else {
    res.send('Contraseña incorrecta')
  }
})

router.post('/registro', async (req, res) => {
  const { username, password } = req.body
  const newUser = new User({ username, password })
  console.log(newUser)
  res.send('hola')
})

module.exports = router
