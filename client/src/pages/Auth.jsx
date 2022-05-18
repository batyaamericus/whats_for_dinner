import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Login from "../components/Login";
import Registration from "../components/Registration/Registration";

const Auth = () => {
  const [isMember, setIsMember] = useState(false);
  return (
    <Container>
      <h2 className="display-3">{isMember ? "LogIn" : "SignUp"}</h2>
      {isMember ? <Login /> : <Registration />}
      <p className="c-modal-toggle">
        {isMember ? (
          <>
            Are you not registered?{" "}
            <Button variant="link" onClick={() => setIsMember(false)}>
              {" "}
              Sign up here{" "}
            </Button>{" "}
          </>
        ) : (
          <>
            Are you registered?{" "}
            <Button variant="link" onClick={() => setIsMember(true)}>
              {" "}
              Log In here{" "}
            </Button>{" "}
          </>
        )}
      </p>
    </Container>
  );
};

export default Auth;
