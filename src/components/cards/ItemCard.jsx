import React from "react";
import { Card, Button } from "react-bootstrap";

const ItemCard = ({ item }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} alt={item.title} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Category: {item.category}</Card.Text>
        <Card.Text>Price: ${item.price.$numberDouble}</Card.Text>
        <Card.Text>Rating: {item.rating.rate} ({item.rating.count} reviews)</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
