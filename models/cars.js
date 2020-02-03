module.exports = function (sequelize, DataTypes) {
    var Cars = sequelize.define("Cars", {
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
        },

        uuid: { type: DataTypes.STRING },

    });
    return Cars;
};