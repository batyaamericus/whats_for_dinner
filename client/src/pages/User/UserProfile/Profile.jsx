import React, { useState } from "react";
import "./Profile.css";
import useAuth from "../../../hooks/useAuth";
import { Button, Container, Form, Spinner } from "react-bootstrap";

const Profile = (props) => {
  const {
    activeUser,
    isLoading,
    showAlert,

    displayAlert,
  } = useAuth();
  const [name, setName] = useState(activeUser?.name);
  const [lastName, setLastName] = useState(activeUser?.lastName);
  const [pwd, setPwd] = useState(activeUser?.pwd);
  const [email, setEmail] = useState(activeUser?.email);

  let valuesToUpdate = {};
  if (pwd !== "") {
    valuesToUpdate = {
      name,
      lastName,
      pwd,
      email,
    };
  } else {
    valuesToUpdate = {
      name,
      lastName,
      email,
    };
  }
  function handleUpdate(e) {
    e.preventDefault();
    if (!name || !lastName || !email) {
      displayAlert();
      return;
    }
    /*     onUpdate(valuesToUpdate);
     */
  }

  return (
    <Container className="mt-4 p-profile">
      <h1 className="display-5">My Profile</h1>
      <Form className="p-profile" onSubmit={handleUpdate}>
        <Form.Group
          className="mb-3 personalData"
          controlId="exampleForm.ControlInput1"
        >
          <div>
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            type="password"
          />
        </Form.Group>

        <div className="btn-container">
          <Button
            variant="warning"
            type="submit"
            disabled={isLoading}
            className="mb-3"
          >
            {!isLoading ? (
              "Save Changes"
            ) : (
              <>
                <span>Saving...</span>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
              </>
            )}
          </Button>
        </div>
      </Form>
      {/*   {  showAlert && <Alerts/>} */}
    </Container>
  );
};

export default Profile;
