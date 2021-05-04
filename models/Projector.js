module.exports = function(sequelize, DataTypes) {
    var Projector = sequelize.define('Projector', {
        model:DataTypes.STRING,
        type: DataTypes.STRING,
        lumens:DataTypes.INTEGER,
        price:DataTypes.INTEGER,
        image:DataTypes.STRING,
        description:DataTypes.STRING
        
    })

    return Projector
}