import express from "express";
const UserRoute = express.Router();
import {logUser, submitNewUser} from "../controllers/userController.js"
import Validation from "../midlewares/schemaValidation.js"
import hashPassword from "../midlewares/hashPassword.js";
import checkPassword from "../midlewares/checkUserPassword.js";
import CheckMailUnique from "../midlewares/CheckMailUnique.js";
import doPasswordsMatch from "../midlewares/doPasswordsMatch.js";

import {newUserSchema, loginSchema} from "../schemas/userSchemas.js";

UserRoute.route("/signup")
    .post(Validation(newUserSchema), doPasswordsMatch, CheckMailUnique, hashPassword, submitNewUser)

UserRoute.route("/login")
    .post(Validation(loginSchema), checkPassword, logUser)

export default UserRoute;