const mongoose = require('mongoose')
const mongoURI = 'mongodb://127.0.0.1:27017/mongodb'

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
