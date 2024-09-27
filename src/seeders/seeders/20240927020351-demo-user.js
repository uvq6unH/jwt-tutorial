'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('User',
      [
        {
          email: 'John Doe 1',
          password: '123',
          username: '1'
        },
        {
          email: 'John Doe 2',
          password: '123',
          username: '2'
        }, {
          email: 'John Doe 3',
          password: '123',
          username: '3'
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
