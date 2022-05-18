import authModel from "../models/userModel.js"
import 'dotenv/config';
import jwt from "jsonwebtoken"


async function logUser(req, res) {
  const user = req.currentUser[0];
  console.log("inside login-user controller",user.user_id)
  const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  res.cookie("token", token, { httpOnly: true });
  res.send ({ id:user.user_id ,name: user.name, lastName: user.lastName, email:user.email});

}


async function submitNewUser(req, res){

    try {
        const { name, lastName, email, pwd } = req.body;
        console.log("inserting to db: " , name, lastName, email, pwd);
        const {user_id} = await authModel.RegNewUser({  name, lastName, email, pwd  });
        res.send({user_id, name, lastName, email});
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

async function updateUserData(req, res){
    try{
    console.log("inside update user data: ")
    const { user_id, name, lastName, email } = req.body;
    //const userId = req.body.user_id;
    const change = req.body;
    //console.log(userId, change);
    const result = await authModel.updateUser(user_id, change);
    //console.log(result);
    res.status(200).send({user_id, name, lastName, email});
    } catch(err){
        res.status(500).send(err);
    }
}

export { logUser ,submitNewUser, updateUserData };