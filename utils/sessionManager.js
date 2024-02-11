// require("dotenv").config();
const { verifyToken } = require("./token");

const checkRole = (sysRole) => {
  return (req, res, next) => {
    const { token } = req.headers || "";
    console.log(sysRole);
    if (!token) throw new Error("invalid token");
    const tokenVerification = verifyToken(token);
    console.log(tokenVerification);
    const { data } = verifyToken(token);
    const validRole = sysRole.some((role) => data.role.includes(role));
    if (!validRole) throw new Error("Permission Denied !!");
    next();
  };
};

module.exports = { checkRole };
