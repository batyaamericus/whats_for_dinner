import authModel from "../models/userModel.js"
import 'dotenv/config';
import jwt from "jsonwebtoken"


async function logUser(req, res) {
  const user = req.currentUser[0];
  console.log("inside login-user controller",user.id)
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  res.cookie("token", token, { httpOnly: true });
  res.send ({token:token, id:user.id ,firstName: user.firstName, lastName: user.lastName, is_admin:user.is_admin, savedPets:petList});

}


async function submitNewUser(req, res){

    try {
        const { name, lastName, email } = req.body;
        console.log(name, lastName, email);
        const user = await authModel.RegNewUser({  name, lastName, email  });
        res.send(email);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

export { logUser ,submitNewUser };