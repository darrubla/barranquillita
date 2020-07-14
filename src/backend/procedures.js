const config = require('./config');
const mariadb = require('mariadb');

//{config{...:...,...:....}}

console.log(config.config)

const pool = mariadb.createPool(config.config);
export async function test() {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM ganado");
      console.log(rows);
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
}
//test();