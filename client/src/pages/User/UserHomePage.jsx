import React, { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./UserHomePage.css";
import useAuth from "../../hooks/useAuth.js";
import { useNavigate } from "react-router-dom";

const UserHomePage = () => {
  const {
    activeUser,
    isLoading,
    showAlert,

    displayAlert,
    } = useAuth();
    console.log(activeUser);

  const [showUser, setShowUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserById = async () => {
      try {
      } catch (err) {}
    };
    fetchUserById();
  }, []);

  return (
    <Container>
      <div className="user-homepage__content">
        <h1>Welcome {showUser}</h1>
        <h2> Check our games !</h2>
        <div className="center">
          <Button
            onClick={() => navigate("/search")}
            variant="warning"
            className="userPageBtn"
          >
            Search
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default UserHomePage;
