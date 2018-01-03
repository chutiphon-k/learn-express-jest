function routes(fastify, options, next) {
	fastify
		.get('/', (req, reply) => {
			reply.send({ a: 100 })
		})
		.get('/a', { schema: { querystring: { a: { type: 'integer' } } } }, (req, reply) => {
			reply.send({ a: 100 + req.query.a })
		})
		.post('/', (req, reply) => {
			reply.send({ a: req.body.a })
		})
	next()
}

export default routes