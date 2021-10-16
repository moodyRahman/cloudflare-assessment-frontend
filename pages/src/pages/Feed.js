import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import Post from "../components/Post";
import { AccessTokenContext } from "../context/LoginContext";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
	const token = useContext(AccessTokenContext).accessToken;
  let history = useHistory();
	
	useEffect(() => {
		if (token === "")
		{
			history.push("/")
			return
		}

    fetch("https://workers.moodyrahman.workers.dev/post", { mode: "cors" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
        console.log(data);
      });
  }, [token, history]);

  if (loading) {
    return <Container>loading screen</Container>;
  }

  return (
    <Container>
      {posts.map((e) => (
        <Post data={e}></Post>
      ))}
    </Container>
  );
};

export default Feed;
