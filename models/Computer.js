module.exports = function(sequelize, DataTypes) {
    var Computer = sequelize.define('Computer', {
        model:DataTypes.STRING,
        price:DataTypes.INTEGER,
        image:DataTypes.STRING,
        description:DataTypes.STRING
    })

    return Computer
}