const jsonschema = require("jsonschema");
const companyNewSchema = require("../schemas/companyNew.json");

function validateCompanyCreation(req, res, next) {
  const validator = jsonschema.validate(req.body, companyNewSchema);
  if (!validator.valid) {
    return next(new Error(validator.errors.map((e) => e.stack)));
  }
  return next();
}

module.exports = {
  validateCompanyCreation,
};
