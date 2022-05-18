import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Login from "../components/Login";
import Registration from "../components/Registration/Registration";

const Auth = () => {
  const [isMember, setIsMember] = useState(false);
  return (
    <Container>
      <h2 className="display-3">{isMember ? "LogIn" : "SignUp"}</h2>
      {isMember ? <Login /> : <Registration />}
    </Container>
  );
};

export default Auth;
