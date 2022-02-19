//Aula 03.1 - Criando Rotas No Servidor Node

const http = require('http')
const url = require('url')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((requisição, resposta) => {
    resposta.writeHead(200, {'Content-Type': 'text/html'})
    resposta.write(requisição.url)

    const p = url.parse(requisição.url, true).query

    resposta.write('<br/>' + p.nome)
    resposta.write('<br/>' + p.curso)
    resposta.end()

    //Na URL, o espaço é igual ao sinal de mais (+).
    //E "&" significa "e".
})

servidor.listen(porta, host, () => {console.log('Servidor rodando.')})
