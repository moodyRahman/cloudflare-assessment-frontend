import { Router } from 'itty-router'

// Create a new router
const router = Router()

/*
Our index route, a simple hello world.
*/
router.get("/", () => {
  return new Response("Hello, world! This is the root page of your Worker template.")
})

router.post("/post", async request => {
  // If the POST data is JSON then attach it to our response.
  if (request.headers.get("Content-Type") === "application/json") {
    fields["json"] = await request.json()
  }

  // Serialise the JSON to a string.
  const returnData = JSON.stringify(fields, null, 2);

  return new Response(returnData, {
    headers: {

router.get("/post", async (request) => {
  const allPosts = await POSTS_DATABASE.list();
  
  let out = await Promise.all(
    allPosts.keys.map(async e => {
      return await POSTS_DATABASE.get(e.name)
    })
  )

  return new Response(out)
});

router.get("/error", async request => {
  throw 55;
  return new Response("no error");
})

const errorHandler = (error) => {
  console.log(error)
  return new Response("internal server error", {status:500})
}


router.all("*", () => new Response("404, not found!", { status: 404 }))
addEventListener('fetch', (e) => {
  e.respondWith(
    router
    .handle(e.request)
    .catch(errorHandler)
    )
})
