const bcrypt = require("bcrypt");

exports.generatePasswordHash = password => {
  return bcrypt.hashSync(password, 10);
};

exports.comparePasswords = (hashedPassword, password) => {
  return bcrypt.compareSync(password, hashedPassword);
};
