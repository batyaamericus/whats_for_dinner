import authModel from "../models/userModel.js"

async function CheckMailUnique(req, res, next) {
  console.log('checking mail is unique')
  const { email, pwd } = req.body;
    if(email){
    try {
        const user = await authModel.logIn(email);
        console.log(user + " existing")
        if (user.length === 0) {
            next();
        } else {
            res.status(400).send({instancePath:"/",
                                  message:"Email allready exists"});
        }
      } catch (err) {
        console.log(err);
        res.status(401).send("error");
      }
    } else {next();}
  }

export default CheckMailUnique;