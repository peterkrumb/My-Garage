module.exports = function(sequelize, DataTypes) {
    var myCars = sequelize.define("myCars", {
        heading: {
            type: DataTypes.STRING,
        },
        engine: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
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
        },
        uuid: { type: DataTypes.STRING }
    });
    return myCars;
};