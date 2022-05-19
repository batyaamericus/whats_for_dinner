import React from "react";
import { Form } from "react-bootstrap";

function Login({ email, setEmail, pwd, setPwd }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.email">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={setEmail} type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.pwd">
        <Form.Label>Password</Form.Label>
        <Form.Control value={pwd} onChange={setPwd} type="password" />
      </Form.Group>
    </>
  );
}

export default Login;
