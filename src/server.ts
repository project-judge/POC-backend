import fastify from "fastify";

const app = fastify()

app.get('/', async()=>{
  return 'Hello world'
})

app.listen({
  host: '0.0.0.0',
  port: 3333,
}).then(()=>{
  console.log("⭐ Server running on port 3333")
})