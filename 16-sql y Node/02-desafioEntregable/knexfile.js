// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './myDB.sqlite' },
    useNullAsDefault: true,
  },

  production: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      database: 'noeliacid',
    },
  },
};
