//Ainda não foi feita a instalação dos pacotes MySQL. - Ver aula 08 para efetuar suas instalações.

const conexão = async () => {

	if (global.conexão && global.conexão.state != 'disconnected') {
		return global.conexão
	}

	const mysql = require('mysql2/promise')
	const connection = mysql.createConnection('mysql://root: 123456789@localhost:3306/cfbcursos')

	console.log('Conexão efetuada com sucesso!')

	global.conexão = connection
	return conexão
}

const todos_clientes = async () => {
	const conexão = await conexão()
	const [linhas] = await connection.query('SELECT * FROM cliente_node')
	return await linhas
}

module.exports = {todos_clientes}
