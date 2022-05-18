import bcrypt from 'bcrypt';

function hashPassword(req, res, next) {
  const saltRounds = 10;
  if(req.body.pwd){
    console.log(req.body.pwd)
    bcrypt.hash(req.body.pwd, saltRounds, (err, hash) => {
      if (err) {
        next(err);
      }
      req.body.pwd = hash;
      console.log(hash)
      next();
    });
  } else {
    next();
  }
}

export default hashPassword