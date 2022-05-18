import React from "react";
import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ItemResult from "../components/ItemResult.js";
import { getTopTenResults } from "../services/services.js";

function TopTen() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getResults() {
    try {
      const res = await getTopTenResults();
      console.log(res);
      setResults(res);
    } catch (error) {}
  }

  useEffect(() => {
    getResults();
  }, []);

  return (
    <Container>
      <Row className="mt-3 justify-content-center">
        {results.map((result) => (
          <Col
            key={result.game_id}
            md={"auto"}
            lg={"auto"}
            style={{ width: "auto" }}
          >
            <ItemResult result={result} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TopTen;
