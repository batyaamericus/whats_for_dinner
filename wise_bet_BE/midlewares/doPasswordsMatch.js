function doPasswordsMatch(req, res, next) {
    const { pwd, confirmPwd } = req.body;
    if (pwd !== confirmPwd) {

      res.status(400).send("Passwords do not match")
      return;
    }
    delete req.body.confirmPwd
    next();
  }

export default doPasswordsMatch;