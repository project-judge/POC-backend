import { questions } from "@/dumby_data/questions";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export function getQuestion(request: FastifyRequest, reply: FastifyReply){
  const getQuestionParamsSchema = z.object({
    slug: z.string(),
  })

  const {slug} = getQuestionParamsSchema.parse(request.params)

  const question = questions.find(question=>question.slug === slug)

  if(!question){
    return reply.status(404).send({error: 'Question not found'})
  }

  return reply.status(200).send({
    question,
  })
}