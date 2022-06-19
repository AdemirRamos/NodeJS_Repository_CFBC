//Aula 05 - Criando Rotas Usando Express

const express = require('express')
const app = express() //Criando um aplicativo que recebe a "const express".
const porta = process.env.PORT //"process.env.PORT" pode ser usado toda vez em que não se saiba a porta onde o servidor vai rodar. 

app.get('/', (requisição, resposta) => { //Aqui indicamos a rota e um "arrow-function" para escrever um bloco de códigos.
    resposta.send('Seja bem-vindo (a)!') //Este comando (à esquerda) é equivalente ao "response.write()".
})

app.get('/canal', (requisição, resposta) => {
    resposta.json({canal: 'CFB Cursos', curso: 'Node JS'})
})

app.listen(porta || 3000, () => {console.log('O servidor está rodando.')})

//P. S.: O pacote "node module" necessário para que este arquivo funcione está em outro diretório;
//P. S.: Para fazer este arquivo funcionar corretamente, basta colar o pacote aqui.
