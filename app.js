const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const mongoURI = 'mongodb://127.0.0.1:27017/mongodb'
const rutaVistas = path.join(__dirname, '/vistas')

// Importar Schemas
const User = require('./schemas/userSchema')

// Configurar servir archivos a la carpeta public (para CSS)
app.use(express.static('public'))

// En esta ruta, sirve la vista de Angular
app.get('/angular-vista', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'))
})

// Configurar motor de plantillas ejs
app.set('view engine', 'ejs')
app.set('views', rutaVistas)

// Configurar bd
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conexión exitosa a MongoDB')
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error)
  })

app.get('/', (req, res) => {
  res.render('loginView')
})

app.get('/usuarios', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    console.error('Error mostrando usuarios ', error)
    res.status(500).json({ error: 'Error mostrando usuarios' })
  }
})

app.listen(port, () => {
  console.log(`Aplicación en puerto ${port}`)
})
