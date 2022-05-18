import React, { useState } from "react";
import AuthContext from "../contexts/AuthContext.js";

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
