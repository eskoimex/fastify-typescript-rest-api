import { FastifyInstance } from "fastify";


import { createPost, deletePost, getPosts, getPost, updatePost } from "../controllers/posts.controller";
import { createSchema, deleteSchema, getAllSchema, getSchema, updateSchema } from "../schema/posts.schema";


export default async function (fastify: FastifyInstance) {
  // List all posts, paginated
  fastify.get('/', { schema: getAllSchema }, getPosts);

  // Get one post
  fastify.get('/:id', { schema: getSchema }, getPost);

  // Deleteing a Post
  fastify.delete('/:id', { schema: deleteSchema }, deletePost);

  // Create a new Post
  fastify.post('/',  { schema: createSchema }, createPost);

  // Update an existing Post
  fastify.put('/:id', { schema: updateSchema }, updatePost);
}

