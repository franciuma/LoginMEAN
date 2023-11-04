const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const port = 3000
const rutaVistas = path.join(__dirname, '../vistas')

// Usamos json para que se interpreten los req.body
app.use(express.json())

// Usar database.js
require('./database')

// Configurar CORS
app.use(cors())

// Configurar servir archivos a la carpeta public (para CSS)
app.use(express.static('public'))

// En esta ruta, sirve la vista de Angular
app.get('/angular-vista', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'))
})

// Configurar motor de plantillas ejs
app.set('view engine', 'ejs')
app.set('views', rutaVistas)
console.log(rutaVistas)

app.get('/', (req, res) => {
  res.render('loginView')
})

app.use(require('./routes/index'))
app.use(require('./routes/userCrud'))

app.listen(port, () => {
  console.log(`Aplicación en puerto ${port}`)
})
