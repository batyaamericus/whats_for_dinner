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

function Search(props) {
  const [results, setResults] = useState([1, 2, 3]);
  return (
    <Container className="mt-4">
      <h2 className="display-5">Search your team</h2>
      <Form className="d-flex mt-3">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-warning">Search</Button>
      </Form>
      <Row className="mt-3 justify-content-center">
        {results.map((result) => (
          <Col key={result} md={"auto"} lg={"auto"} style={{ width: "auto" }}>
            <ItemResult result={result} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Search;
