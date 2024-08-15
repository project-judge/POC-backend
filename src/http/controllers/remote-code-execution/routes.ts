import { FastifyInstance } from "fastify";
import { fetchQuestions } from "./fetch-questions";
import { getQuestion } from "./get-question";
import { submitQuestion } from "./submit-question";

export async function remoteCodeExecutionRoutes(app:FastifyInstance){
  app.get('/questions', fetchQuestions)
  app.get('/question/:slug', getQuestion)

  app.post('/question/:slug/submit', submitQuestion)
}