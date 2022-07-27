(async () => {
	const db = require('./db')

	const novo_id = 3
	const novo_nome2 = 'Ramos'
	const nova_idade2 = 17

	const clientes = await db.atualizar_clientes(id, {nome: novo_nome2, idade: novo_idade2})

	console.log(`Registro do cliente de id ${novo_id} atualizado.`)
	
	const novo_nome = 'Sofia'
	const novo_idade = 26

	console.log('Inserir novo cliente.')
	//await db.inserir_clientes({nome: 'Ademir', idade: '25'})
	await db.inserir_clientes({nome: novo_nome, idade: novo_idade})

	const novo_id_two = 2
	console.log('Deletar clientes.')
	await db.deletar_clientes(novo_id_two)

	console.log('Obter todos os clientes.')
	const clientes = await db.todos_clientes()

	console.log(clientes)
})()
