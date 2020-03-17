"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Andrew Hinga",
          phone: "+254708099155",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jane Doe",
          phone: "+254728310082",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Users", null, {})
};
