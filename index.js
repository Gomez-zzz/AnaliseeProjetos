const express = require('express')
const app = express();
const chamadoRoutes = require('../routes/chamadoRoutes')

app.use(express.json())

app.use('/chamados', chamadoRoutes)

app.listen(3000, function(){
    console.log('servidor rodando na porta 3000')
})