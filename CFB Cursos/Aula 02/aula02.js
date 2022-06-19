//Aula 02 - Criando Um Servidor Simples Em Node

//Node JS HTTP Module: https://www.w3schools.com/nodejs/nodejs_http.asp

const http = require('http')

//"require" é um método de importação assim como o "@".

//A escolha de nome para esta "arrow function" é totalmente facultativa.
//P. S.: Somente a ordem não deve ser alterada: 1ª: "request"; 2ª: "response".

//P. S.: Para checar os núemros para http, visite "http cats". - They're not dogs, unfortunately!

http.createServer((request, response) => { //O método após "http" serve para criar um servidor para a transferência de dados via HTTP.
    response.writeHead(200, {'Content-Type': 'text/plain'})
    //200 significa que tudo está ok;
    //"content type" diz respeito ao tipo de conteúdo que será retornado ao cliente;
    //Caso se deseje retornar um documento HTML, o conteúdo de "content type" deve ser: "text/html".

    response.write('CFB Cursos\nCurso de Node JS') //Retorna/escreve uma resposta para o cliente (quem fez a chamada).
    response.end() //Fim da resposta.

}).listen(1337) //Indicação da porta na qual o servidor está rodando.

//Para atualizar o servidor, devemos sair do servidor (control + c) e adentrá-lo novamente (node nome do arquivo).

//P. S.: "localhost:" é igual a: "127.0.0.1:".
