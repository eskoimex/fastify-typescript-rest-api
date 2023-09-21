import request from 'supertest';
import app from '../routes/posts.routes';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
beforeAll(async () => {
  await prisma.$connect();
});

afterAll(async () => {
  await prisma.$disconnect();
});

beforeEach(async () => {
  await prisma.post.deleteMany();
});

describe('Post API', () => {
  test('should create a new post', async () => {
    const response = await request(app)
      .post('/post')
      .send({ title: 'Axe', content: 'thriller', author:"Ade"  });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Axe');
    expect(response.body.content).toBe('thriller');
    expect(response.body.content).toBe('Ade');

  });


  test('should get a specific post', async () => {
    const post = await prisma.post.create({
      data: { title: 'Axe', content: 'thriller', author:"Ade"  },
    });

    const response = await request(app)
      .put(`/post/${post.id}`)
      .send({ title: 'Axe', content: 'thriller', author:"Ade"  });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Axe');
    expect(response.body.content).toBe('thriller');
    expect(response.body.content).toBe('Ade');
  });



  test('should update a post', async () => {
    const post = await prisma.post.create({
      data: { title: 'Axe', content: 'thriller', author:"Ade"  },
    });

    const response = await request(app)
      .put(`/post/${post.id}`)
      .send({ title: 'Axe', content: 'thriller', author:"Ade"  });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Axe');
    expect(response.body.content).toBe('thriller');
    expect(response.body.content).toBe('Ade');
  });



  test('should delete a post', async () => {
    const post = await prisma.post.create({
     data: { title: 'Axe', content: 'thriller', author:"Ade"  },
    });

    const response = await request(app).delete(`/post/${post.id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Axe');
    expect(response.body.content).toBe('thriller');
    expect(response.body.content).toBe('Ade');
  });
});


// import { FastifyInstance } from 'fastify';
// import { create, read, update, remove } from '../src/controllers';
// import { PrismaClient } from '@prisma/client';
// import fastifyPlugin from 'fastify-plugin';
// import fastify from 'fastify';

// const prisma = new PrismaClient();

// let app: FastifyInstance;

// beforeAll(async () => {
//   app = fastify();
//   app
//     .register(fastifyPlugin(prismaPlugin))
//     .register(fastifyPlugin(routesPlugin));
// });

// afterAll(async () => {
//   await prisma.$disconnect();
// });

// describe('Users API', () => {
//   it('should create a new user', async () => {
//     // TODO: Write the test case for creating a new user
//   });

//   it('should read a user', async () => {
//     // TODO: Write the test case for reading a user
//   });

//   it('should update a user', async () => {
//     // TODO: Write the test case for updating a user
//   });

//   it('should delete a user', async () => {
//     // TODO: Write the test case for deleting a user
//   });
// });