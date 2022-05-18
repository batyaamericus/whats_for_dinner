import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Login from "../components/Login";
import Registration from "../components/Registration/Registration";

const Auth = () => {
  const [isMember, setIsMember] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  return (
    <Container className="mt-5">
      <h2 className="display-3">{isMember ? "LogIn" : "Register"}</h2>
      {isMember ? (
        <Login
          email={email}
          setEmail={(e) => setEmail(e.target.value)}
          pwd={pwd}
          setPwd={(e) => setPwd(e.target.value)}
        />
      ) : (
        <Registration
          email={email}
          setEmail={(e) => setEmail(e.target.value)}
          pwd={pwd}
          setPwd={(e) => setPwd(e.target.value)}
          name={name}
          setName={(e) => setName(e.target.value)}
          lastName={lastName}
          setLastName={(e) => setLastName(e.target.value)}
          confirmPwd={confirmPwd}
          setConfirmPwd={(e) => setConfirmPwd(e.target.value)}
        />
      )}
      <div className="d-flex justify-content-end">
        <Button
          variant="warning"
          // onClick={isMember ? handleLogIn : handleSignUp}
          // disabled={isAuthLoading}
        >
          {isMember ? "Log In" : "Register"}
          {/* {isAuthLoading && (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
              </>
            )} */}
        </Button>
      </div>
      <p className="c-modal-toggle">
        {isMember ? (
          <>
            Are you not registered?{" "}
            <Button variant="link" onClick={() => setIsMember(false)}>
              {" "}
              Register here{" "}
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
