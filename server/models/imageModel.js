/* This page sets up querying for accessing the image database */
import pkg from "pg";
const { Pool } = pkg;
const myURI = 'postgres://zymmszcv:jTEVoQ1TQxHQOx7Uwzcj7za4oXMXCxMT@mahmud.db.elephantsql.com/zymmszcv'

const pool = new Pool ({
  connectionString: myURI,
})

const db = {
  query: (text, params, callback) => {
    console.log('Querying the database');
    return pool.query(text, params, callback);
  }
};

export default db;