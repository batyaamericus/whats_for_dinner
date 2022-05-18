import React, { useState } from "react";
import "./Profile.css";
import useAuth from "../../../hooks/useAuth";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import Alert from "../../../components/Alerts";

const Profile = (props) => {
  const { activeUser, isLoading, showAlert, onUpdateUser, displayAlert } =
    useAuth();
  const [name, setName] = useState(activeUser?.name);
  const [lastName, setLastName] = useState(activeUser?.lastName);
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
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
    if (!name || !lastName || !email || !pwd) {
      displayAlert("Please provide all values", "danger");
      return;
    }
    if (pwd !== confirmPwd) {
      displayAlert("Password doesn't match", "danger");
      return;
    }
    onUpdateUser({ name, lastName, email, pwd, confirmPwd });
  }

  return (
    <Container className="mt-4 p-profile">
      <h1 className="display-5">My Profile</h1>
      <Form className="p-profile" onSubmit={handleUpdate}>
        <Form.Group className="mb-3 personalData" controlId="exampleForm.name">
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
        <Form.Group className="mb-3 " controlId="exampleForm.email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="exampleForm.pwd">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            type="password"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="exampleForm.confpwd">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
            type="password"
          />
        </Form.Group>

        <div className="btn-container center">
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
        <Alert />
      </Form>
      {/*   {  showAlert && <Alerts/>} */}
    </Container>
  );
};

export default Profile;
