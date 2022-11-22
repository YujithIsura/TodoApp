module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define("Todo", {
        taskName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        taskDescription: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        fileName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false,
            },
        },
        filePath: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false,
            },
        },
        status: {
            type: DataTypes.ENUM('Todo', 'InProgres', 'Done'),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    return Todo;

};