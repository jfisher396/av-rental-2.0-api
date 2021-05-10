module.exports = function(sequelize, DataTypes) {
    const Audio = sequelize.define('Audio', {
        id: { 
            type:DataTypes.INTEGER,
            primaryKey: "true"
        },
        model:DataTypes.STRING,
        rate:DataTypes.INTEGER,
        image1:DataTypes.STRING,
        image2:DataTypes.STRING,
        description:DataTypes.STRING
    })

    return Audio
}