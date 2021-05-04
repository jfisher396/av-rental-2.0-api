module.exports = function(sequelize, DataTypes) {
    var Screen = sequelize.define('Screen', {
        model:DataTypes.STRING,
        size: DataTypes.STRING,
        price:DataTypes.INTEGER,
        image:DataTypes.STRING,
        description:DataTypes.STRING
    })

    return Screen
}