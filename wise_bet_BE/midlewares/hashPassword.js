import bcrypt from 'bcrypt';

function hashPassword(req, res, next) {
  const saltRounds = 10;
  if(req.body.password){
    console.log(req.body.password)
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
      if (err) {
        next(err);
      }
      req.body.password = hash;
      console.log(hash)
      next();
    });
  } else {
    next();
  }
}

export default hashPassword