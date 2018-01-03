import fastify from './app'
import routes from './routes'

fastify.register(routes, { prefix: '/api' })

fastify.listen(8080, () => {
	console.log(`server runing on *:${fastify.server.address().port}`)
})