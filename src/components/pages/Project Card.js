import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'

// const styles = {};

export default function ProjectCard(props) {
  return (
    <Card className ='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          This is the 2nd group project. The application is designed for both customers side as well as restaurant owner side.
        </Card.Text>
        <Button variant="primary" href={props.link} target='_blank'>Deployed Site</Button>
      </Card.Body>
    </Card>

  );
}