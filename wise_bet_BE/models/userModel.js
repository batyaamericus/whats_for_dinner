import { dbConnection } from "../index.js";

async function logIn(email) {
    try {
      console.log("inside login model")
      const queryResult = await dbConnection.from("users").where({ email });
      console.log(queryResult);
      return queryResult;
    } catch (err) {
      console.log(err);
    }
  }

  async function RegNewUser(newUser) {
    console.log(newUser);
    try {
      const queryResult = await dbConnection.from("users").insert(newUser);
      return queryResult;
    } catch (err) {
      console.log(err);
    }
  }

  export default { RegNewUser, logIn};