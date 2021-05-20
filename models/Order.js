module.exports = function (sequelize, DataTypes) {
  const Order = sequelize.define("Order", {
    item: DataTypes.STRING,
    price: DataTypes.INTEGER
  });

  // Order.associate = function(models) {
  //   Order.belongsTo(models.User)
  // }

  return Order;
};
