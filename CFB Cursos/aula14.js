//Aula 14 - Usando o MongoDB Com Node JS (Parte 2)

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

	//Usando "bind" para procurar por registros no banco de dados:

	const coleção = "cursos"
	dbo.collection(coleção).findOne({canal: 'CFB Cursos'}, (erro, resultado) => {
	//Retorna somente um registro (o primeiro encontrado que combine com o resultado da pesquisa).
	//{}: retorna tudo o que for encontrado. Dentro das chaves, pode ser especificada a busca.

		if (erro) throw erro

		console.log(resultado)

		banco.close()
	})

	const coleção = "cursos"
	dbo.collection(coleção).find({}).toArray((erro, resultado) => {
		//Novamente: se pode especificar (dentro das chaves) o que se está buscando.

		if (erro) throw erro
		console.log(resultado)
		banco.close()
	})

	const coleção = "cursos"
	dbo.collection(coleção).find({curso: 'Curso de Node'}, (projection: {_id: 0, canal: 0})).toArray((erro, resultado) => {
		//"projection" permite indicar o que se deseja ver / não ver no resultado da pesquisa. | 0 para não ver; 1 para ver.

		if (erro) throw erro
		console.log(resultado[0].curso)
		banco.close()
	})
})
