import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import Auth from "../Auth";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { activeUser, onLogOut } = useAuth();

  return (
    <Container className="homeContainer">
      <div className="welcomeContainer">
        <div className="center">
          <h1>Where all your dreams become more accurate.</h1>
        </div>
        <div className="center">
          {!activeUser && (
            <Button
              variant="warning"
              className="homeBtn"
              onClick={() => navigate("/auth")}
            >
              Authenticate
            </Button>
          )}
          {activeUser && (
            <Button
              variant="warning"
              className="homeBtn"
              onClick={() => onLogOut()}
            >
              Log out
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Home;
