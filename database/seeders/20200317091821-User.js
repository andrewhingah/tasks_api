"use strict";

const bcryptHelpers = require("../../auth/bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Andrew Hinga",
          phone: "0708099155",
          password: bcryptHelpers.generatePasswordHash("Hey@123"),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jane Doe",
          phone: "0728310082",
          password: bcryptHelpers.generatePasswordHash("Hey@124"),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Users", null, {})
};
