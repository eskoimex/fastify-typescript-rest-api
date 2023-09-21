/*
* Schemas used for Validation and Validation and Serialization of our routes/endpoints
*
*/



// GET '/'
export const getAllSchema = {
  querystring: { $ref: 'paginationSchema' },
  tags: ['posts'],
  description: 'List all posts, paginated using a cursor paginator.',
  response: {
    200: {
      type: 'object',
      properties: {
        results: { type: 'array', items: { $ref: 'postSchema#' } },
      }
    },
    404: { $ref: 'messageResponseSchema#' },
  },
};

// GET '/:id'
export const getSchema = {
  params:{ $ref: 'paramIdSchema' },
  tags: ['posts'],
  description: 'Get a single post)',
  response: {
    200: { $ref: 'postSchema#' },
    404: { $ref: 'messageResponseSchema#' },
  }
};

// DELETE '/:id'
export const deleteSchema = {
  params:{ $ref: 'paramIdSchema' },
  tags: ['posts'],
  description: 'Removes an especific cateory from the collection',
  response: {
    200: { $ref: 'messageResponseSchema#' },
    404: { $ref: 'messageResponseSchema#' },
  }
};

// POST '/'
export const createSchema = {
  
  tags: ['posts'],
  description: 'Creates a new post',
  body: {
    type: 'object',
    required: ['title','content', 'author'],
    properties: {
      title: { type: 'string' },
      content: { type: 'string' },
      author: { type: 'string' }

    }
  },
  response: {
    200: { $ref: 'postSchema#' },
    404: { $ref: 'messageResponseSchema#' },
  }
};

// PUT: '/:id'
export const updateSchema = {
  tags: ['posts'],
  description: 'Updates a post',
  params:{ $ref: 'paramIdSchema#' },
  body: {
    type: 'object',
    required: ['title'],
    properties: {
      title: { type: 'string' },
      content: { type: 'string' },
      author: { type: 'string' }    }
  },
  response: {
    200: { $ref: 'postSchema#' },
    404: { $ref: 'messageResponseSchema#' },
  }
};

