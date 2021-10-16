import { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { AccessTokenContext } from "../context/LoginContext";

const Login = () => {
  const setToken = useContext(AccessTokenContext).setAccessToken;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const submit = (event) => {
    setToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWVuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjJ9.pxGbFGX0ORSPqqU4mhiMD_16h0uzoupZBEDnmzC2lzY"
    );
    history.push("/");
    console.log(username, password);
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Form style={{ maxWidth: "50%" }}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>

          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>

          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>

        <Button onClick={submit}>Log in</Button>
      </Form>
      {/* thank you bootstrap documentation for this code */}
    </Container>
  );
};

export default Login;
