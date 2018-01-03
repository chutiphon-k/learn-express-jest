import Fastify from 'fastify'

import routes from './routes'

const fastify = Fastify()
fastify.register(routes, { prefix: '/api' })

export default fastify