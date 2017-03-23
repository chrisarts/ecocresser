
exports.up = function(knex, Promise) {
    return knex.schema.createTable('articles', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.string('content').notNullable();
        table.text('media', 'longtext').notNullable();
        table.string('category').notNullable();
        table.date('date').notNullable();
        table.boolean('outstanding').notNullable();
        table.boolean('active').notNullable();
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('articles');
};