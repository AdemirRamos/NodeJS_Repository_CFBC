//Aula 03.1 - Criando Rotas No Servidor Node

//Split The Query String: https://www.w3schools.com/nodejs/nodejs_http.asp
//Node URL Module: https://www.w3schools.com/nodejs/nodejs_url.asp

const http = require('http')
const url = require('url')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((requisição, resposta) => {
    resposta.writeHead(200, {'Content-Type': 'text/html'})
    resposta.write(`Conteúdo pós-domínio: "${requisição.url}".`)
    //Retorno: "/";
    //Tudo o que for digitado após a "/" será retornado dentro do documento HTML.

    const parâmetro = url.parse(requisição.url, true).query
    //O método "url.parse()" retorna a url como um objeto onde cada parte é um do endereço é uma propriedade;
    //Esse método ["url.parse()"] serve para dividir um endereço na "web" em parte legíveis;
    //O segundo argumento ("true") torna a URL uma "query string";
    //Já o ".query" transforma a URL em um Objeto.

    //Passagem de parâmetros através da URL:

    //Para passar parâmetros através da URL, usamos a "?";
    //O nome do parâmetro (esse nome é facultativo);
    //Um sinal de igual para atribuição de valor ao parâmetro;
    //E um "&" significa "e" - o que nos permite adicionar novos parâmetros.
    //Resultado: http://localhost:3000/?nome=Ademir&curso=NodeJS

    resposta.write('<br/>' + parâmetro.nome)
    resposta.write('<br/>' + parâmetro.curso)
    resposta.end()

    //Na URL, o espaço é igual ao sinal de mais (+).
    //E "&" significa "e".
})

servidor.listen(porta, host, () => {console.log('Servidor rodando.')})
