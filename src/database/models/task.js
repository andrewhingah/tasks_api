'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    customer_first_name: DataTypes.STRING,
    personnel_first_name: DataTypes.STRING,
    personnel_other_name: DataTypes.STRING,
    customer_last_name: DataTypes.STRING,
    customer_phone: DataTypes.STRING,
    agentId: DataTypes.INTEGER,
    assigned: DataTypes.DATE,
    in_progress: DataTypes.DATE,
    completed: DataTypes.DATE,
    deferred: DataTypes.DATE,
    status: DataTypes.STRING,
    location: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    access_code: DataTypes.INTEGER,
    splash_page: DataTypes.INTEGER,
    mpesa: DataTypes.STRING,
    autoplay: DataTypes.STRING,
    comments: DataTypes.STRING,
    registration: DataTypes.STRING
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};
