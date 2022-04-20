'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      checklistId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'checklists',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('tasks');
  }
};
