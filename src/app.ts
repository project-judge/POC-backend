import fastify from "fastify";
import { remoteCodeExecutionRoutes } from "./http/controllers/remote-code-execution/routes";
import cors from "@fastify/cors";
import { ZodError } from "zod";
import { env } from "./env";
import swaggerUi from "@fastify/swagger-ui"
import swagger from "@fastify/swagger"

export const app = fastify()


app.register(swagger)
app.register(swaggerUi, {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'Project Judge API',
      description: 'Documentação da API usando Swagger e Fastify',
      version: '1.0.0'
    },
    host: 'localhost:3333',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  exposeRoute: true,
})
app.register(cors)
app.register(remoteCodeExecutionRoutes)



app.setErrorHandler((error, request, reply)=>{
  if(error instanceof ZodError){
    return reply.status(400).send(error.format())
  }

  if(env.NODE_ENV !== 'production'){
    console.error(error)
  }else{
    // Use in production, toolings like Sentry, Datadog.
  }

  return reply.status(500).send('Internal server error')
})
