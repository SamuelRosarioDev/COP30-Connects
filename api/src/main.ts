// Import the framework and instantiate it
import Fastify from 'fastify'
import { routes } from './routes/index.ts';
const fastify = Fastify({ logger: true })

await fastify.register(routes, { prefix: '/api' });

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}