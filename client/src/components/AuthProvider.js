import axios from "axios";
import React, { useState } from "react";
import AuthContext from "../contexts/AuthContext.js";
import { signUp } from "../services/services.js";

function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("");

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
    const user = await signUp(newUser);
    setActiveUser(user);
    console.log(user);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
