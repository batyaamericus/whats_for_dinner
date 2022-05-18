function doPasswordsMatch(req, res, next) {
    const { password, confirmPassword } = req.body;
    if (pwd !== confirmPwd) {

      res.status(400).send("Passwords do not match")
      return;
    }
    next();
  }

export default doPasswordsMatch;