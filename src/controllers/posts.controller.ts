import { FastifyRequest, FastifyReply } from 'fastify';
import joi from 'joi';


const postSchema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  author: joi.string().required(),
});

export async function getPosts(request: FastifyRequest<CrudAllRequest>, reply: FastifyReply) {
  const { take, from } = request.query;

  let results = await request.server.prisma.post.findMany({
    cursor: from ? { id: from } : undefined,
    skip: from ? 1 : undefined,
    take,
    orderBy: { id: 'desc' }
    
  });

  if (results.length === 0) {
    return reply.status(404).send({ message: "No elements found" });
  }

  return reply.status(200).send({ results });
}

export async function getPost(request: FastifyRequest<CrudIdRequest>, reply: FastifyReply) {
  const { id } = request.params;

  let post = await request.server.prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    return reply.status(404).send({ message: 'Post not found' });
  }

  return reply.status(200).send(post);
}

export async function deletePost(request: FastifyRequest<CrudIdRequest>, reply: FastifyReply) {
  const { id } = request.params;

  await request.server.prisma.post.delete({
    where: { id },
  });

  return reply.status(200).send({ message: 'Post deleted' });
}

export async function createPost(request: FastifyRequest<CreatePost>, reply: FastifyReply) {
  const { title, content, author } = request.body;


  const { error } = postSchema.validate(request.body);
  if (error) {
    return reply.status(400).send("Fields cannot be empty");
  }


  let post = await request.server.prisma.post.create({
    data: {
      title,
      content,
      author
    }
  });

  return reply.status(201).send(post);

}

export async function updatePost(request: FastifyRequest<PutPost>, reply: FastifyReply) {
  const { title, content, author } = request.body;
  const { id } = request.params;

  let post = await request.server.prisma.post.update({
    where: { id },
    data: {
      title,
      content,
      author
    }
   });

  return reply.status(200).send(post);
}

