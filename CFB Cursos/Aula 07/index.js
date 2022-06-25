const express = require('express')
const rotas = require('./Rotas/rotas.js')
const porta = process.env.PORT || 3000
const app = express()

app.use('/', rotas)

app.get('*', (requisição, resposta) => { //"app.get('*')": Tradução: independentemente da rota acessada, dê a resposta abaixo.
    resposta.send('CFB Cursos')
})

app.listen(porta, () => {console.log('O servidor está rodando.')})
