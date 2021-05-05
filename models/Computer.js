module.exports = function (sequelize, DataTypes) {
  var Computer = sequelize.define("Computer", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: "true",
    },
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    screenSize: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  return Computer;
};
