const mysql = require('mysql');
const config = require('./dbconfig')
var con = mysql.createConnection(config);

async function getAll() {
    try {
        let xxx = await con.query("SELECT * FROM language", (error, result) => {
            console.log(result)
            return result;
        })
        return xxx
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getAll: getAll
}