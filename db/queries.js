const knex = require('./knex')

module.exports = {
  cars: {
    getAll: function() {
      // This grabs info from the database
      return knex('car')
    }
  }
}
