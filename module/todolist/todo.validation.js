const Joi = require("joi");

const Schema = Joi.object({
  id: Joi.string().required(),
  listItem: Joi.string().required(),
  addedBy: Joi.string().required(),
});

const validation = (req, res, next) => {
  const { error } = Schema.validate(req.body);
  error ? res.status(400).json({ message: error.details[0].message }) : next();
};

module.exports = { validation };
