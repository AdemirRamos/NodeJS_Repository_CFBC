(async () => {
	const db = require('./db')
	console.log('Obter todos os clientes.')
	const clientes = await db.todos_clientes()
	console.log(clientes)
})()
