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

function Search(props) {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");

  async function handleSearchResults(value) {
    try {
      const req = await searchResults(value);
      setResults(req);
    } catch (err) {
      console.log(err);
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
        <Button
          onClick={() => handleSearchResults(value)}
          variant="outline-warning"
        >
          Search
        </Button>
      </Form>
      <Row className="mt-3 justify-content-center">
        {results.length > 0 &&
          results.map((result) => (
            <Col key={result} md={"auto"} lg={"auto"} style={{ width: "auto" }}>
              <ItemResult result={result} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Search;
