const { Router } = require('express')
const router = Router()

// Importar Schemas
const User = require('../models/userSchema')

const EXITO = 'Usuario Logueado correctamente'
const USUARIO_INCORRECTO = 'Usuario no existente'
const CONTRASENIA_INCORRECTA = 'Contraseña incorrecta'

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
    res.send({ message: EXITO })
  } else if (!userDB) {
    res.status(401).send({ message: USUARIO_INCORRECTO })
  } else {
    res.status(401).send({ message: CONTRASENIA_INCORRECTA })
  }
})

router.post('/registro', async (req, res) => {
  const { username, password } = req.body
  const newUser = new User({ username, password })
  console.log(newUser)
  res.send('hola')
})

module.exports = router
