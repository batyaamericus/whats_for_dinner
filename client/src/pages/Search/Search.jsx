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
import "./Search.css";
import { DropdownButton } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

function Search() {
  const [results, setResults] = useState([]);
  const [key, setKey] = useState("name");
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearchResults() {
    try {
      setIsLoading(true);
      const req = await searchResults({ [key]: value });
      setResults(req);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }

  function setDrop(e) {
    console.log(e.target.value);
    setKey(e.target.value);
  }
  return (
    <Container className="mt-4">
      <h2 className="display-5">Search</h2>
      <Form className="d-flex mt-3">
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-warning"
            title={key}
            id="input-group-dropdown-1"
          >
            <Dropdown.Item>
              <option onClick={setDrop} value="name">
                Name
              </option>
            </Dropdown.Item>
            <Dropdown.Item>
              <option onClick={setDrop} value="date">
                Date
              </option>
            </Dropdown.Item>
          </DropdownButton>
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
        </InputGroup>
      </Form>
      {isLoading && (
        <div className="loaderCont">
          <img className="loader" src={Loader} alt="" />
        </div>
      )}

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
