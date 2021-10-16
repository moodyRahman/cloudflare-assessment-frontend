import { Router } from "itty-router";
import { nanoid } from "nanoid";

// Create a new router
const router = Router();

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
};

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
  let id = nanoid();
  await POSTS_DATABASE.put(id, JSON.stringify(data));

  // Serialise the JSON to a string.

  return new Response("success", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400",
    },
  });
});

router.get("/post", async (request) => {
  // const allPosts = await POSTS_DATABASE.list();

  // there has to be a better way than this, maybe some way to batch database calls?
  // if this was running on a server, I could cache the data but it seems like
  // having the frontend handle caching seems more feasible

  // let out = await Promise.all(
  //   allPosts.keys.map(
  //     async (e) => await POSTS_DATABASE.get(e.name, { type: "json" })
  //   )
  // );

  let out = [
    {
      title: "hello!",
      body: "bye!",
      author: "moody",
      time: 44444,
    },
    {
      title: "great weather today",
      body: "it's like 70 degrees, optimal temp",
      author: "moody",
      time: 44445,
    },
    {
      title: "my favorite food...",
      body: "stirfry broccoli!!!!",
      author: "moody",
      time: 44446,
    },
    {
      title: "my cat would have said... ",
      body: "... meow, IF I HAD A CAT",
      author: "moody",
      time: 44447,
    },
    {
      title: "funky",
      body: "fresh",
      author: "moody",
      time: 44448,
    },
  ];

  return new Response(JSON.stringify(out), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400",
    },
  });
});

const errorHandler = (error) => {
  console.log(error.stack);
  console.log(error.message);
  return new Response("internal server error", { status: 500 });
};

router.all("*", () => new Response("404, not found!", { status: 404 }));
addEventListener("fetch", (e) => {
  e.respondWith(router.handle(e.request).catch(errorHandler));
});
