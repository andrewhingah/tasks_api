const bcrypt = require("bcrypt");

export const generatePasswordHash = (password) => {
  return bcrypt.hashSync(password, 10);
};

export const comparePasswords = (hashedPassword, password) => {
  return bcrypt.compareSync(password, hashedPassword);
};

const bcryptHelpers = { generatePasswordHash, comparePasswords };

export default bcryptHelpers;
