//Aula 03 - Criando Rotas No Servidor Node

//Read The Query String: https://www.w3schools.com/nodejs/nodejs_http.asp

const http = require('http')
const porta = 3000
const host = '127.0.0.1' //Aqui se pode indicar o caminho que se desejar. - O caminho padrão é "127.0.0.1".

const servidor = http.createServer((requisição, resposta) => {
    //O argumento "requisição" representa uma requisição por parte do cliente;
    //Essa requisição é um objeto e uma de suas propriedades é a "url";
    //Essa propriedade ("url") armazena a parte da url que vem após o domínio.

    resposta.writeHead(200, {'Content-Type': 'text/html'})
    //O 200 diz respeito ao estado ("status") da requisição.
    //O "content type" do tipo "text/plain" retorna texto normal; já o tipo "text/html" retorna um documento HTML.

    if (requisição.url == '/') { //A "/" representa a rota-raiz ("root").
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

//Para acessar as demais portas, é preciso digitar "localhost:/canal" ou "/curso", et cetera.
