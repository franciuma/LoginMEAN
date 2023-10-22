const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const rutaVistas = path.join(__dirname, '/vistas')

// Configurar motor de plantillas ejs
app.set('view engine', 'ejs')
app.set('views', rutaVistas)

// Configurar servir archivos a la carpeta public (para CSS)
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('mi_vista', { mensaje: 'Hola desde la vista' })
})

app.listen(port, () => {
  console.log(`Aplicación en puerto ${port}`)
})
