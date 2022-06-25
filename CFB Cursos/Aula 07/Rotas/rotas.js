const express = require('express')
const rotas = express.Router()

//express.Router(): https://expressjs.com/pt-br/guide/routing.html
//Router: https://medium.com/owinteractive/entendendo-o-express-router-e-usando-módulos-de-forma-simples-24ca6723fe91

//sendFile(): https://acervolima.com/funcao-express-js-res-sendfile/
//Path Module: https://www.w3schools.com/nodejs/ref_path.asp
//path.join(): https://www.w3schools.com/nodejs/met_path_join.asp
//__dirname & ./: https://www.geeksforgeeks.org/difference-between-__dirname-and-in-node-js/
//module.exports: https://www.alura.com.br/artigos/utilizando-export-modules-no-node-js
//app.use() e next(): https://acervolima.com/qual-e-o-uso-da-funcao-next-em-express-js/

let cursos_info = [
    {'curso': 'node js','info': 'curso de node js'},
    {'curso': 'react','info': 'curso de react'},
    {'curso': 'java','info': 'curso de java'},
    {'curso': 'arduino','info': 'curso de arduino'}
]

rotas.get('/', (requisição, resposta) => {
    resposta.json({olá: 'Seja bem-vindo(a)!'})
})

//Passagem de parâmetros para rotas ('/'):

rotas.get('/:cursoid', (requisição, resposta) => {
    const curso = requisição.params.cursoid //Capturando o parâmetro passado através da rota.
    const curso_info = cursos_info.find(i => i.curso == curso)
    
    //find(): https://www.w3schools.com/jsref/jsref_find.asp

    if (!curso_info) {
        resposta.status(404).json({erros: 'Curso não encontrado.', curso_pesquisado: curso})

        //JSON: https://www.w3schools.com/js/js_json.asp
        //json(): https://www.geeksforgeeks.org/response-json-python-requests/
    }

    else {
        resposta.status(200).json(curso_info)
    }
})

module.exports = rotas
