const express = require('express')
const app = express()

//rotas
const musicas = require('./routes/musicasRoute')

app.use('/musicas', musicas);

module.exports = app
