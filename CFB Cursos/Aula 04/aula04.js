//Aula 05 - Módulo FS Para Manipular Arquivos Em Node (Parte 1)

//O módulo FS nos permite ler, alterar, deletar, criar, renomear, et cetera, arquivos.

//Node JS File Server (FS): https://www.w3schools.com/nodejs/nodejs_url.asp

const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

//process.env.PORT: https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js

const server = http.createServer((request, response) => {
    //fs.appendFile('site.html') //Anexa um arquivo.

    fs.readFile('site.html', (erro, arquivo) => { //Lê um arquivo.
        //Como segundo argumento de "readFile()" temos uma função que, por sua vez, leva dois argumentos;
        //O primeiro argumento da função serve para indicar o procedimento em caso de erro;
        //O segundo argumento serve para indicar o que se fazer com o arquivo caso o "status" da requisição seja 200.

        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(arquivo)
        //O método "readFile()" lê e anexa ao segundo argumento da função o arquivo passado como primeiro argumento para o método;
        //Nesse caso, o arquivo que atende pelo endereço de "site.html" será anexado ao "arquivo" (segundo argumento da função);
        //A função em si será o segundo argumento de "readFile()".

        return response.end()
    })
})

server.listen(porta || 3000, () => {console.log('O servidor está rodando.')})
