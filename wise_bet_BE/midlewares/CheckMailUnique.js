import authModel from "../models/userModel.js"

async function checkMailUnique(req, res, next) {
  console.log('checking mail is unique')
  const { email } = req.body;
    if(email){
    try {
        const user = await authModel.logIn(email);
        console.log(user + " mail exists")
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