import fastify from "fastify";
import { remoteCodeExecutionRoutes } from "./http/controllers/remote-code-execution/routes";
import cors from "@fastify/cors";
import { ZodError } from "zod";
import { env } from "./env";

export const app = fastify()

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
