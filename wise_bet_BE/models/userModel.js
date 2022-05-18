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
    console.log("enter user to db: ");
    try {
      const queryResult = await dbConnection.from("users").insert(newUser);
      const user_id = await dbConnection.from("users").select('user_id').where({ email: newUser.email });
      console.log("user_id:", user_id);
      return user_id[0];
    } catch (err) {
      console.log(err);
    }
  }

  export default { RegNewUser, logIn};