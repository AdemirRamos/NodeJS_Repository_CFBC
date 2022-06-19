//Aula 05 - Módulo FS Para Manipular Arquivos Em Node (Parte 1)

//O módulo FS nos permite ler, alterar, deletar, criar, renomear, et cetera, arquivos.

//Node JS File Server (FS): https://www.w3schools.com/nodejs/nodejs_url.asp

const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((request, response) => {
    fs.appendFile('test.txt', 'Curso de Node JS.', (erro) => {
        //Como segundo argumento, o "appendFile()" tem o conteúdo do arquivo.

        if (erro) {
            throw `Erro encontrado: "${erro}".`
        }

        else {
            console.log('Arquivo criado com sucesso!')
        }

        //Caso o arquivo passado para "appendFile()" não exista, ao rodar o servidor esse arquivo será criado;
        //O mesmo ocorre com "openFile()"; a diferença entre os dois se dá pelo fato de "openFile()" servir para ler arquivos;
        //Já "appendFile()" serve para anexar arquivos.

        response.end() //Sem o método ".end()", o nosso servidor não vai parar de rodar.
    })
})

server.listen(porta || 3000, () => {console.log('O servidor está rodando.')})
