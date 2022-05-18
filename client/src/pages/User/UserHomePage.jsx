import React, { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./UserHomePage.css";
import useAuth from "../../hooks/useAuth.js";

const UserHomePage = () => {
  const {
    activeUser,
    isLoading,
    showAlert,

    displayAlert,
  } = useAuth();

  const [showUser, setShowUser] = useState();

  useEffect(() => {
    const fetchUserById = async () => {
      try {
      } catch (err) {}
    };
    fetchUserById();
  }, []);

  return (
    <Container>
      <Card className="user-homepage__container">
        <div className="user-homepage__content">
          <h1>Welcome {showUser}</h1>
          <h2> Check our games !</h2>
          <div className="center">
            <Button to="/search" variant="warning" className="userPageBtn">
              Search
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default UserHomePage;
