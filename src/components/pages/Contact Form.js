import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// const styles=
// {
//   container: {
//     padding:'1em',
//   },
// }

export default function Contactform() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>You name</Form.Label>
        <Form.Control placeholder="Enter your name" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text><br></br>
        <Form.Label>Your message</Form.Label>
        <Form.Control placeholder="Enter your meessage" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
