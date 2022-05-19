import React, { useState } from "react";
import {
  Button,
  FormControl,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import ItemResult from "../../components/ItemResult";
import { searchResults } from "../../services/services.js";
import Loader from "../../images/Loader.gif";

function Search() {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearchResults() {
    try {
      setIsLoading(true);
      const req = await searchResults(value);
      setResults(req);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }
  return (
    <Container className="mt-4">
      <h2 className="display-5">Search your team</h2>
      <Form className="d-flex mt-3">
        <FormControl
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={handleSearchResults} variant="outline-warning">
          Search
        </Button>
      </Form>
      <img src={Loader} alt="" />
      <p>
        <a href="https://giphy.com/stickers/wellsfargo-JSpRuzrFfFUBhFdCs8">
          via GIPHY
        </a>
      </p>
      <Row className="mt-3 justify-content-center">
        {results.length > 0 &&
          results.map((result, index) => (
            <Col key={index} md={"auto"} lg={"auto"} style={{ width: "auto" }}>
              <ItemResult result={result} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Search;
