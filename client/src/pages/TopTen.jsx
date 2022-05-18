import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getTopTenResults } from "../services/services.js";

function TopTen() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getResults() {
    try {
      const res = await getTopTenResults();
      console.log(res);
    } catch (error) {}
  }

  useEffect(() => {
    getResults();
  }, []);

  return <Container>hola</Container>;
}

export default TopTen;
