
exports.up = function(knex, Promise) {
    return knex.schema.createTable('articleCategories', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('articleCategories');
};
