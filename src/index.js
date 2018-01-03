import fastify from './app'

fastify.listen(8080, () => {
	console.log(`server runing on *:${fastify.server.address().port}`)
})