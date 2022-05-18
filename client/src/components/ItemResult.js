import React from "react";
import { Card } from "react-bootstrap";

function ItemResult({ result }) {
  return (
    <Card bg="dark" style={{ width: "18rem" }} className="mb-2">
      <Card.Header style={{ color: "#FFB22A" }}>Team A vs Team B</Card.Header>
      <Card.Body>
        <Card.Title>Probability </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ItemResult;
