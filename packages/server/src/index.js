const fastify = require('fastify')({ logger: true })

fastify.get('/', async (req, rep) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 }, console.log('server started'))
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
