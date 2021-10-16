import { Router } from "itty-router";
import { nanoid } from 'nanoid'

// Create a new router
const router = Router();

/*
Our index route, a simple hello world.
*/
router.get("/", () => {
  return new Response(
    "Hello, world! This is the root page of your Worker template."
  );
});

/**
 * The current defacto format for a post is as follows in JSON
 * be sure to wipe the database if this format is ever changed
    {
        "title":string,
        "body":string,
        "author":string,
        "time":int unix timestamp
    }
*/

router.post("/post", async (request) => {
  // If the POST data is JSON then attach it to our response.
  const data = await request.json();
  let id = nanoid()
  await POSTS_DATABASE.put(id, JSON.stringify(data));

  // Serialise the JSON to a string.

  return new Response("success");
});

router.get("/post", async (request) => {
  const allPosts = await POSTS_DATABASE.list();
  
  // there has to be a better way than this, maybe some way to batch database calls?
  // if this was running on a server, I could cache the data but it seems like 
  // having the frontend handle caching seems more feasible
  let out = await Promise.all(
    allPosts.keys.map(async e => 
      await POSTS_DATABASE.get(e.name, {type:"json"})
    )
  )

  return new Response(JSON.stringify(out))
});

router.get("/error", async (request) => {
  throw 55;
  return new Response("no error");
});

const errorHandler = (error) => {
  console.log(error.stack);
  console.log(error.message)
  return new Response("internal server error", { status: 500 });
};

router.all("*", () => new Response("404, not found!", { status: 404 }));
addEventListener("fetch", (e) => {
  e.respondWith(
    router
    .handle(e.request)
    .catch(errorHandler));
});
