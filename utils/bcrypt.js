const bcrypt = require("bcryptjs");

const encryption = (password) => {
  return bcrypt.hashSync(password, Number(process.env.SALT));
};

const decryption = (password, hashPass) => {
  return bcrypt.compareSync(password, hashPass);
};
module.exports = { encryption , decryption};
