import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Auth from "../Auth";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container className="homeContainer">
      <div className="welcomeContainer">
        <div className="center">
          <h1>Where all your dreams become more accurate.</h1>
        </div>
        <div className="center">
          <Button
            variant="warning"
            className="homeBtn"
            onClick={() => navigate("/auth")}
          >
            Authenticate
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
