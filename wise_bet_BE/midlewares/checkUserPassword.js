import authModel from "../models/userModel.js"
import bcrypt from 'bcrypt';

async function checkPassword(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await authModel.logIn(email);
        if (user.length === 0) {
          res.status(401).send("user not found");
          return;
        }
        bcrypt.compare(password, user[0].password, function (err, result) {
            if(result===true){
              req.currentUser=user;
              next() 
            } else {
              res.status(401).send("invalid password");
            }
        });
      } catch (err) {
        console.log(err);
        res.status(401).send("invalid username or password");
      }
}

export default checkPassword