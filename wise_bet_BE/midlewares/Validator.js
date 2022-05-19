import Ajv from "ajv";
import addFormats from "ajv-formats"

const ajv = new Ajv();
addFormats(ajv)

export default function Validation (schema) {
  return (req, res, next) => {
    const validate = ajv.compile(schema);
    const valid = validate(req.body);
    if (!valid) {
      res.status(400).send(validate.errors);
    } else {
      next();
    }
  }
}
