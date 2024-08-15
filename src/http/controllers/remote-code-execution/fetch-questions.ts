import { questions } from "@/dumby_data/questions";
import { FastifyReply, FastifyRequest } from "fastify";

export function fetchQuestions(request: FastifyRequest, reply: FastifyReply){
  return reply.status(200).send({
    questions,
  })
}