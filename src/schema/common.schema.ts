/*
* Simple global schemas that are going to be used across all of our app.
*/

// Cursor Pagination: take and from values.
export const paginationSchema = {
  $id: 'paginationSchema',
  type: 'object',
  properties: {
    take: {
      type: 'number',
      enum: [5, 10, 25],
      default: 10,
    },
    from: {
      type: 'string',
     // pattern: '^[0-9a-fA-F]{24}$',
    },
  },
};

// Just a single response object including a message
export const messageSchema = {
  $id: 'messageResponseSchema',
  type: 'object',
  properties: {
    message: { type: 'string' },
  },
};

// Used to validate/match URLS that include an ':id' param
export const paramIdSchema = {
  $id: 'paramIdSchema',
  type: 'object',
  properties: {
    id: { type: 'number', 
    //pattern: '^[0-9a-fA-F]{24}$'
   },
  },
  required: ['id'],
};

