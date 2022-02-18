//Aula 03 - Criando Rotas No Servidor Node

const http = require('http')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((requisição, resposta) => {
    resposta.writeHead(200, {'Content-Type': 'text/html'})

    if (requisição.url == '/') {
        resposta.write('<h1>Seja bem-vindo (a)!</h1>')
    }

    else if (requisição.url == '/canal') {
        resposta.write('<h1>CFB Cursos.</h1>')
    }

    else if (requisição.url == '/curso') {
        resposta.write('<h1>Conheça os cursos do nosso canal.</h1>')
    }

    else if (requisição.url == '/node') {
        resposta.write('<h1>Curso de Node.</h1>')
    }

    resposta.end()
})

servidor.listen(porta, host, () => {
    console.log('Servidor rodando.')
}) //O "host" não é obrigatório. Após o "host", podemos ter uma mensagem ou mesmo função-flecha.

//Para acessar as demais portas, é preciso digitar "localhost:/canal" ou "/curso".
