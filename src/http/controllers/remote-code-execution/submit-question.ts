import { questions } from "@/dumby_data/questions";
import { runTests } from "@/utils/run-tests";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function submitQuestion(request: FastifyRequest, reply: FastifyReply){
  const submitQuestionParamsSchema = z.object({
    slug: z.string(),
  })

  const submitQuestionBodySchema = z.object({
    codeSolution: z.string(),
  })

  const {slug} = submitQuestionParamsSchema.parse(request.params)
  const {codeSolution} = submitQuestionBodySchema.parse(request.body)

  const question = questions.find(question=>question.slug === slug)

  if(!question){
    return reply.status(404).send({error: 'Question not found'})
  }

  const result = await runTests(codeSolution, question)

  return reply.status(200).send({
    result,
  })


}