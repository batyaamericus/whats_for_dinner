import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Auth from "../Auth";

const Home = () => {
      const navigate = useNavigate();
    return (
      <Container>
        <div>
          <h1>Here we will have a description</h1>
          <Button variant="warning" onClick={() => navigate("/auth")}>
            Authenticate
          </Button>
        </div>
      </Container>
    );
};

export default Home;
