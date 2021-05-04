module.exports = function(sequelize, DataTypes) {
    var Computer = sequelize.define('Computer', {
        type:DataTypes.STRING,
        model:DataTypes.STRING,
        price:DataTypes.INTEGER,
        image:DataTypes.STRING,
        description:DataTypes.STRING
    })

    return Computer
}