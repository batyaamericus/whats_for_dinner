import { dbConnection } from "../index.js";

async function logIn(email, user_id) {
    let queryResult;
    try {
      console.log("inside login model, user_id: ", user_id)
      if(!user_id){
        console.log("no userId")
        queryResult = await dbConnection.from("users").where({ email });
      } else {
        console.log("is userId")
        queryResult = await dbConnection.from("users").whereNot({user_id}).andWhere({ email });
        console.log(queryResult);
      }
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

  async function updateUser(userId,change){
    const queryResult = await dbConnection.from('users')
                                          .where({'user_id': userId})
                                          .update(change);
    console.log(queryResult);
    return queryResult;
  }

  export default { RegNewUser, logIn, updateUser};