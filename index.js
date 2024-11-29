//Configuração incial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()


// Forma de ler JSON no Express (Middlewares)
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


// Rotas da API
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)


// Rota Teste / Endpoint

app.get('/', (req, res) => {
    
    // Mostrar requisição
    res.json({ message: 'Oi, Express!'})
    
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.98iyq.mongodb.net/?retryWrites=true&w=majority&appName=APICluster`)
        .then(() => {
            console.log('Conectou ao banco!')
            app.listen(3000)
  })
    .catch((err) => console.log(err))
