const fetchQuestionsDocumentation = {
  schema: {
    description: 'Retorna todas as questões',
    tags: ['remote-code-execution'],
    summary: 'Obter lista de todas as questões',
    response: {
      200: {
        description: 'Listagem de questões',
        type: 'object',
        properties: {
          questions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                title: {type: 'string'},
                slug: {type: 'string'},
                description: {type: 'string'},
                codeSnippet: {type: 'string'},
                codeTest: {type: 'string'},
              },
            },
          }
        }
      }
    }
  }
}

const getQuestionDocumentation = {
  schema: {
    description: 'Retorna uma questão baseado em um slug único para cada questão',
    tags: ['remote-code-execution'],
    summary: 'Obter detalhes de uma questão',
    response: {
      200: {
        description: 'Detalhes da questão',
        type: 'object',
        properties: {
          question: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              title: {type: 'string'},
              slug: {type: 'string'},
              description: {type: 'string'},
              codeSnippet: {type: 'string'},
              codeTest: {type: 'string'},
            },
          }
        }
      },

      404: {
        description: 'Questão não encontrada',
        type: 'object',
        properties: {
          error: {type: 'string'},
        }
      }
    }
  }
}

const submitQuestionDocumentation = {
  schema: {
    description: 'Realização de um submit de uma questão enviada pelo usuário',
    tags: ['remote-code-execution'],
    summary: 'Realizar envio de questões',
    body: {
      type: 'object',
      description: 'Envio de questão',
      properties: {
        codeSolution: {type: 'string'},
      }
    },
    response: {
      404: {
        description: 'Questão não encontrada',
        type: 'object',
        properties: {
          error: {type: 'string'},
        }
      }
    }
  }
}

export {
  fetchQuestionsDocumentation, 
  getQuestionDocumentation,
  submitQuestionDocumentation
}