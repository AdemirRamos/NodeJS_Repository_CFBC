//Aula 05 - Criando Rotas Usando Express

const http = require('http')
const porta = process.env.PORT //"process.env.PORT" pode ser usado toda vez em que não se saiba a porta onde o servidor vai rodar. 

const servidor = http.createServer((requisição, resposta) => {
    //É possível separar o conteúdo de "writeHead()":

    resposta.statusCode = 200
    resposta.writeHead(200, {'Content-Type': 'text/plain'})

    //A resposta ao cliente também pode ser feita diretamente no ".end()".

    resposta.end('CFB Cursos.')
})

servidor.listen(porta || 3000, () => {console.log('O servidor está rodando.')})

//P. S.: No Windows Terminal, o comando que limpa a tela é o "cls" (sem aspas).
