import { Card } from "react-bootstrap";

const Post = (props) => {
  const { title, author, body } = props.data;

  return (
    <Card style={{ width: "25rem" }}>
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Subtitle> {author} </Card.Subtitle>
        <Card.Text>
        {body}
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default Post;
