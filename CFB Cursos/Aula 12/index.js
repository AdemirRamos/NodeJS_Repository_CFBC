const http = require('http')
const formidable = require('formidable')
const fs = require('fs')
const porta = process.env.PORT || 3000

const servidor = http.createServer((requisição, resposta) => {
    if (requisição.url == '/envioDeArquivos') {
        const form = new formidable.IncomingForm()
        
        form.parse(requisição, (erro, campos, arquivos) => {
            const urlAntiga = arquivos.filetoupload.path
            const urlNova = 'C:/Users/Lucineide Ferreira/' + arquivos.filetoupload.name

            fs.rename(urlAntiga, urlNova, (erro) => {
                if (erro) throw erro
                resposta.write('Arquivo movido!')
                resposta.end()
            })
        })
    }
    
    else {
        resposta.writeHead(200, {'Content-Type': 'text/html'})
        resposta.write('<form action="envioDeArquivos" method="post" enctype="multipart/form-data">')
        resposta.write('<input type="file" name="filetoupload"><br>')
        resposta.write('<input type="submit" value="Enviar" style="margin-top: 10px;">')
        resposta.write('</form>')
        return resposta.end()
    }
})

servidor.listen(porta, () => {console.log('O servidor está rodando.')})
