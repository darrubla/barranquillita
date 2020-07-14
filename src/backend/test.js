const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: '',
     database: 'pupiplast',
     connectionLimit: 5
});

async function test() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT * FROM ganado");
  console.log(rows); //[ {val: 1}, meta: ... ]
	//const res = await conn.query("INSERT INTO ganado value (NULL, ?, NOW(), ?)", [80000, 1]);
  //console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  //return
  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}
test();

async function test1() {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("CALL SELECT_ALL_AREAS");
        console.log(rows); //[ [ {val: 1}, {val: 2}, meta: [[...],[...]] ], OkPAcket {...:..., ...:..., ...:...}]
        //return rows  
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
  }
//test1();

async function test2() {
    console.log("iniciando...")
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("CALL UPDATE_NUMBER_LOANS(?, ?)", [2, 0]);
        console.log(rows); //OkPAcket {...:..., ...:..., ...:...}
        //return rows  
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
  }
//test2();

async function test3() {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("CALL INSERT_VALUES_LOANS(?, ?, ?, ?)", ["Semanal", 20000, 1, 1]);
        console.log(rows); //OkPAcket {...:..., ...:..., ...:...}
        //return rows
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
  }
//test3();