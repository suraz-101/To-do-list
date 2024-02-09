const Joi = require("joi");

const Schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const userValidation = (req, res, next) => {
  const { error } = Schema.validate(req.body);
  error ? res.status(400).json({ message: error.details[0].message }) : next();
};

module.exports = { userValidation };
