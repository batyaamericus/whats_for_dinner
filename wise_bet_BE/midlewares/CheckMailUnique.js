import authModel from "../models/userModel.js"

async function checkMailUnique(req, res, next) {
  console.log('checking mail is unique')
  const { email, user_id } = req.body;
    if(email){
    try {
        const user = await authModel.logIn(email, user_id);
        console.log(user.length + " mail exists")
        if (user.length === 0) {
            next();
        } else {
            res.status(400).send("Email allready exists");
        }
      } catch (err) {
        console.log(err);
        res.status(401).send("error");
      }
    } else {next();}
}

export default checkMailUnique;