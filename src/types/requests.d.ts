/*
* Some types used mostly to extract data from:
* - Request parameters
* - POST body
* - Query string
*/

type CrudAllRequest = {
  Querystring: {
    take: number;
    from?: number;
   // cursor?: number
  }
}

type CrudIdRequest = {
  Params: {
    id: Int;
  }
};

type CreatePost = {
  Body: {
    title: string;
    content: string;
    author: string
  }
}

type PutPost = {
  Body: {
    title: string;
    content: string;
    author: string
    }
  Params: {
    id: Int;
  }
}
