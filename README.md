# RESTful API for a Blog Post



## Setup & Configuration
Clone the repository:
```bash
git clone 
```

---

## Running locally

```bash
# Install all Dev-included dependencies
npm install
# Generates Prisma cliente metadata/types stuff
npx prisma generate
```

Running the project is simple as:

```bash
npm run start
```

Now you should be able access the project:
- APIs: http://127.0.0.1:5000/api/v1/*
- SwaggerUI documentation: http://127.0.0.1:5000/docs/

## API deployed public using postman
https://documenter.getpostman.com/view/8425786/2s9YCBsoWW

### Other useful commands
```bash
# Very nice UI for data visualization of our database
npx prisma studio
# Synchronize your Prisma schema with your database
npx prisma db push
```



## Running as a Docker container
During development:

```bash
# Start the container
docker-compose up
```



If not, use your favourite debugger and connect to: ```0.0.0.0:9229```

## Hot-Reloading

When running by `npm run start` or using the `dev` docker image, the app runs using `nodemon` watching for changes and recompiling the app if necessary.

