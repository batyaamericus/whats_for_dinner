import express from "express";
const UserRoute = express.Router();
import {logUser, submitNewUser} from "../controllers/userController.js"
import Validation from "../midlewares/schemaValidation.js"
import hashPassword from "../midlewares/hashPassword.js";
import checkPassword from "../midlewares/checkUserPassword.js";
import CheckMail from "../midlewares/CheckMailUnique.js";
import doPasswordsMatch from "../midlewares/doPasswordsMatch.js";
import {newUserSchema, loginSchema, updateUserSchema} from "../schemas/users.js";

UserRoute.route("/signup")
    .post(Validation(newUserSchema), doPasswordsMatch, CheckMail, hashPassword, submitNewUser)

UserRoute.route("/login")
    .post(Validation(loginSchema), checkPassword, logUser)

export default UserRoute;