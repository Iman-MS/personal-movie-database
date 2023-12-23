const knex = require("knex");
var db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

// db.raw("select 1+1 as result").catch((err) => {
//   console.log(err);
//   process.exit(1);
// });

module.exports = db;
