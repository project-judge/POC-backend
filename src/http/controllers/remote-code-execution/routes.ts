import { FastifyInstance } from "fastify";
import { fetchQuestions } from "./fetch-questions";
import { getQuestion } from "./get-question";
import { submitQuestion } from "./submit-question";
import {fetchQuestionsDocumentation, getQuestionDocumentation, submitQuestionDocumentation} from "@/docs/remote-code-execution-doc"

export async function remoteCodeExecutionRoutes(app:FastifyInstance){
  app.get('/questions', fetchQuestionsDocumentation, fetchQuestions)
  app.get('/question/:slug', getQuestionDocumentation, getQuestion)

  app.post('/question/:slug/submit', submitQuestionDocumentation, submitQuestion)
}