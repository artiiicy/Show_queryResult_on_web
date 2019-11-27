const mariadb = require('mariadb');
 
const pool = mariadb.createPool({
    host: "localhost", port:"3306",
    user: "root", password: "alswns0112",
    connectionLimit: 5
});
 
async function GetUserList(str){
    let conn, rows;
    try{
        conn = await pool.getConnection();
        conn.query('USE assignment');
        rows = await conn.query(str);
    }
    catch(err){
        throw err;
    }
    finally{
        if (conn) conn.end();
        return rows;
    }
}
 
module.exports = {
    getUserList: GetUserList
}
