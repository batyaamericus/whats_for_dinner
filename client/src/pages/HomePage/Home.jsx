import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Auth from "../Auth";

const Home = () => {
      const navigate = useNavigate();
  return (
    <div>
      <h1>Here we will have a description</h1>
          <Button onClick={() => navigate("/auth")}>
              Authenticate
      </Button>
    </div>
  );
};

export default Home;
