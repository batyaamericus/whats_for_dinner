import authModel from "../models/UsersModel.js"
import 'dotenv/config';
import jwt from "jsonwebtoken"

async function logUser(req, res) {
  const user = req.currentUser[0];
  console.log("inside login-user controller",user.id)
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    try{
      console.log("geting users seaved pets")
      const petList = await authModel.getSavedpets(user.id);
      console.log(petList);
      res.cookie("token", token, { httpOnly: true });
      res.send ({token:token, id:user.id ,firstName: user.firstName, lastName: user.lastName, is_admin:user.is_admin, savedPets:petList});
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
}


async function submitNewUser(req, res){
    // res.send(req.body);
    // console.log("Got a create-user request", req.body);
    try {
        const { firstName, lastName, email, password } = req.body;
    
        const user = await authModel.RegNewUser({ firstName, lastName, email, password });
        res.send(email);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

export { logUser ,submitNewUser };