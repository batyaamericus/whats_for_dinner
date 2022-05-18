import React from "react";
import AuthContext from "../contexts/AuthContext.js";

const initialState = {
  isLoading: false,
  activeUser: null,
};
function AuthProvider({ children }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
