import React, { useState } from "react";
import { Button, FormControl, Form, Container } from "react-bootstrap";

function Search(props) {
  const [results, setResults] = useState([]);
  return (
    <Container>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-warning">Search</Button>
      </Form>
    </Container>
  );
}

export default Search;
