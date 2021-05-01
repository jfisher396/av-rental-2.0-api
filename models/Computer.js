module.exports = function(sequelize, DataTypes) {
    var Computer = sequelize.define('Computer', {
        model:DataTypes.STRING,
        price:DataTypes.INTEGER
    })

    return Computer
}