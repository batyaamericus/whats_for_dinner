import jwt from "jsonwebtoken"
import 'dotenv/config';

async function verifyToken(req, res, next) {
    const token = req.cookies.token;
    console.log(token)
  try {
    if (!token) {
        console.log('Missing token')
      res.status(401).send('Missing token');
      return;
    }
    console.log('token key: ' + token + process.env.JWT_SECRET);
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log('Invalid Token')
        res.status(401).send('Invalid Token');
        return;
      }
      if (decoded) {
        console.log('valid Token')
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (err) {
    console.log(err);
  }
}

export default verifyToken ;