function doPasswordsMatch(req, res, next) {
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) {

      res.status(400).send({instancePath:"/",
                            message:"Passwords do not match"}
                           )
      return;
    }
    next();
  }

export default doPasswordsMatch;