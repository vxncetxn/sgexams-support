const { Pool } = require("pg");
const pgp = require("pg-promise")();
console.log(process.env.DATABASE_URL);

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgres://postgres:password@localhost:5432/sgexams-support"
});
const pg = pgp(
  process.env.DATABASE_URL ||
    "postgres://postgres:password@localhost:5432/sgexams-support"
);
const helper = pgp.helpers;
module.exports = { pool, pg, helper };
