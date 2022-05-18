import express from "express";
const UserRoute = express.Router();
import {logUser, submitNewUser, updateUserData} from "../controllers/userController.js"
import validation from "../midlewares/schemaValidation.js"
import hashPassword from "../midlewares/hashPassword.js";
import checkPassword from "../midlewares/checkUserPassword.js";
import checkMailUnique from "../midlewares/checkMailUnique.js";
import doPasswordsMatch from "../midlewares/doPasswordsMatch.js";
import verifyToken from "../midlewares/verifyToken.js";

import {newUserSchema, loginSchema, updateUserSchema} from "../schemas/userSchemas.js";

UserRoute.route("/signup")
    .post(validation(newUserSchema), doPasswordsMatch, checkMailUnique, hashPassword, submitNewUser)

UserRoute.route("/login")
    .post(validation(loginSchema), checkPassword, logUser)

UserRoute.route("/:id")
    .put(verifyToken, validation(updateUserSchema), checkMailUnique, hashPassword, updateUserData);

export default UserRoute;