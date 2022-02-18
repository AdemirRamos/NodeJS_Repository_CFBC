//Aula 02 - Criando Um Servidor Simples Em Node

const http = require('http')

//A escolha de nome para esta "arrow function" é totalmente facultativa.
//P. S.: Somente a ordem não deve ser alterada: 1ª: "request"; 2ª: "response".

//P. S.: Para checar os núemros para http, visite "http cats". - They're not dogs, unfortunately!

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'    
    })
    response.write('CFB Cursos\nCurso de Node JS')
    response.end()

}).listen(1337)

//Para atualizar o "localhost", devemos sair do Node (control + c) [através do "prompt"] e adentrá-lo novamente (node nome do arquivo).

//P. S.: "localhost:" é igual a: "127.0.0.1:".
