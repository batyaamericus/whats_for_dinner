import React from "react";
import { Card } from "react-bootstrap";

function ItemResult({ result }) {
  const green = {
    color: "#2dff73",
  };
  const red = {
    color: "#ff2d2d",
  };

  return (
    <Card bg="dark" style={{ width: "18rem" }} className="mb-2">
      <Card.Header style={{ color: "#FFB22A" }}>
        {result.teams.team_1} vs {result.teams.team_2}
      </Card.Header>
      <Card.Body>
        <Card.Title style={{ color: "#FFB22A" }}>
          Odds of {result.teamName} to win
        </Card.Title>
        <Card.Text style={{ color: "#FFB22A" }}>
          DK Odds: {result.dk_persentage}%
        </Card.Text>
        <Card.Text style={{ color: "#FFB22A" }}>
          Wise Odds: {result.our_prediction}%
        </Card.Text>
        <Card.Text
          style={result.dk_persentage - result.our_prediction > 0 ? red : green}
        >
          Difference: {result.difference}%
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemResult;
