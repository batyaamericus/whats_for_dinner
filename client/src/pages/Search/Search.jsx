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
import { DropdownButton } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Search.css";
import dateFormat from "../../services/functions.js";
import Sorry from "../../images/Sorry.gif";

function Search() {
  const [results, setResults] = useState(0);
  const [key, setKey] = useState("name");
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  async function handleSearchResults() {
    let query = {};
    key === "name"
      ? (query = { [key]: value })
      : (query = { [key]: dateFormat(startDate, "yyyy-MM-dd") });
    try {
      setIsLoading(true);
      const req = await searchResults(query);
      setResults(req);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }

  function setDrop(e) {
    setKey(e.target.value);
  }
  return (
    <Container className="mt-4">
      <h2 className="display-5">Search</h2>
      <Form className="d-flex mt-3 align-item-center">
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
          {key === "name" ? (
            <FormControl
              type="search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          ) : (
            <DatePicker
              className="datePicker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          )}
          <Button
            onClick={handleSearchResults}
            variant="outline-warning"
            disabled={!value || !startDate}
          >
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
        {results.length === 0 && (
          <>
            <Container>
              <div className="loaderCont2">
                <img className="Sorry" src={Sorry} alt="" />
                <h2>No Game today sorry</h2>
              </div>
            </Container>
          </>
        )}
      </Row>
    </Container>
  );
}

export default Search;
