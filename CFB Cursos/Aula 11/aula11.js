//Aula 11 - Trabalhando Com Eventos Em Node - Módulo "mysql2"

const http = require('http')
const porta = process.env.PORT || 3000
const retorno = () => {console.log('O servidor está rodando.')}

const eventos = require('events')
const evento_emissor = new eventos.EventEmitter()
const final = () => {console.log('Fim do processo.')}

evento_emissor.on('mensagem', () => {console.log('Curso de Node JS.')})
evento_emissor.on('fim', final)

const servidor = http.createServer((requisição, resposta) => {
    resposta.writeHead(200, {'Content-Type': 'text/plain'})
    resposta.write('CFB Cursos')

    evento_emissor.emit('mensagem')
    evento_emissor.emit('fim')

    resposta.end()
})

servidor.listen(porta, retorno)
