/*
* Some global schemas, representing our stuff from the Database.
* These will be used mostly when serializing data in our responses.
*/

export const postSchema = {
  $id: 'postSchema',
  type: 'object',
  required: ['title', 'content', 'author'],
  nullable: true,
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    content: { type: 'string' },
    author: { type: 'string' },
    createdAt: { type: 'string', format: 'date-time' },
    updatedAt: { type: ['string', 'null'], format: 'date-time' },
  },
};


