import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ItemResult.css";

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
      <Card.Footer className="btnCont">
        <Button
          className="itemBtn"
          variant="warning"
          href={`https://www.draftkings.com/?wpsrc=Organic%20Search&wpaffn=Google&wpkw=https%3A%2F%2Fwww.draftkings.com%2F`}
          target="_blank"
        >
          Let's beat the odds
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default ItemResult;
