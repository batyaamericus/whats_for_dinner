import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";
import { Button, FormControl, Form, Container } from "react-bootstrap";

function Search(props) {
  const [results, setResults] = useState([]);
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
    </Container>
  );
}

export default Search;
