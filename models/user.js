module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: "true",
    },
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
  });

  return User;
};
