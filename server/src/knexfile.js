// Update with your config settings.

module.exports = {

    production: {
        client: 'postgresql',
        connection: {
            database: 'cresser',
            user: 'chris',
            password: 'Gaton123!!'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
    development: {
        client: 'postgresql',
        connection: {
            database: 'cresser',
            user:     'postgres',
            password: 'Gaton123'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};