import React, { useState } from "react";
import AuthContext from "../contexts/AuthContext.js";
import { logIn, signUp } from "../services/services.js";
import { useNavigate } from "react-router-dom";

const LSuser = localStorage.getItem("user");
function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(
    LSuser ? JSON.parse(LSuser) : null
  );
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("");
  const navigate = useNavigate();
  function clearAlert() {
    setTimeout(() => {
      setShowAlert(false);
      setAlertText("");
      setAlertType("");
    }, 3000);
  }

  function displayAlert(alertText, alertType) {
    setShowAlert(true);
    setAlertText(alertText);
    setAlertType(alertType);
    clearAlert();
  }

  async function handleSignUp(newUser) {
    setIsLoading(true);
    try {
      const user = await signUp(newUser);
      setActiveUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setShowAlert(true);
      displayAlert(error.response.data.message, "danger");
      setIsLoading(false);
    }
    clearAlert();
  }

  async function handleLogIn(oldUser) {
    setIsLoading(true);
    try {
      const user = await logIn(oldUser);
      setActiveUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setShowAlert(true);
      displayAlert(error.response.data.message, "danger");
      setIsLoading(false);
    }
    clearAlert();
  }

  function handleLogOut() {
    setActiveUser(null);
    localStorage.clear();
    navigate("/");
  }

  return (
    <AuthContext.Provider
      value={{
        alertText,
        alertType,
        activeUser,
        isLoading,
        showAlert,
        clearAlert,
        displayAlert,
        onSignUp: handleSignUp,
        onLogIn: handleLogIn,
        onLogOut: handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
