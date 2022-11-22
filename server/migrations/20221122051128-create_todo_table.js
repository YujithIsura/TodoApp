'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("Todos", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        validate: {
          notEmpty: true,
        },
      },
      taskName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      taskDescription: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      fileName: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false,
        },
      },
      filePath: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: false,
        },
      },
      status: {
        type: Sequelize.ENUM('Todo', 'InProgres', 'Done'),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("Todos");
  }
};
