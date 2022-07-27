(async () => {
	const db = require('./db')
	
	const novo_nome = 'Sofia'
	const novo_idade = 26

	console.log('Inserir novo cliente.')
	//await db.inserir_clientes({nome: 'Ademir', idade: '25'})
	await db.inserir_clientes({nome: novo_nome, idade: novo_idade})

	console.log('Obter todos os clientes.')
	const clientes = await db.todos_clientes()

	console.log(clientes)
})()
