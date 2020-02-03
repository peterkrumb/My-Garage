module.exports = function(sequelize, DataTypes) {
    var myCar = sequelize.define("myCar", {
        heading: {
            type: DataTypes.STRING,
        },
        engine: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.BLOB,
        },
        body_type: {
            type: DataTypes.STRING,
        },
        drivetrain: {
            type: DataTypes.STRING,
        },
        doors: {
            type: DataTypes.STRING,
        },
        transmission: {
            type: DataTypes.STRING,
        }
    });
    return myCar;
};