import React from "react";
import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ItemResult from "../components/ItemResult.js";
import { getTopTenResults } from "../services/services.js";
import Loader2 from "../images/Loader2.gif";
import "./TopTen.css";

function TopTen() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getResults() {
    try {
      setIsLoading(true);
      const res = await getTopTenResults();
      setResults(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getResults();
  }, []);

  return (
    <Container>
      {isLoading && (
        <div className="loaderCont">
          <img className="loader2" src={Loader2} alt="" />
        </div>
      )}
      <Row className="mt-3 justify-content-center">
        {results.map((result) => (
          <Col
            key={result.entry_id}
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
