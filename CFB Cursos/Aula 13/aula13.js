//Aula 13 - Usando o MongoDB Com Node JS

const mongodb = require('mongodb').MongoClient
const url = "mongodb+srv://Ademir:<password>b@cluster0.gkswo.mongodb.net/?retryWrites=true&w=majority"

mongodb.connect(url, (erro, banco) => {
	if (erro) throw erro

	const dbo = banco.db('cfbcursos') //Banco de dados.
	const objeto = {curso: 'Curso de Node JS', canal: 'CFB Cursos'} //Dados a serem inseridos no banco de dados.

	//Formato: {tabela: 'dado'}.

	const coleção = "cursos"
	dbo.collection(coleção).insertOne(objeto, (erro, resultado) => {
		if (erro) throw erro

		console.log('1 novo curso inserido com sucesso!')

		banco.close()
	})
})
