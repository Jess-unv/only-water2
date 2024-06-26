const mysql = require("mysql");
var mysqlConexion = mysql.createConnection({
    host: "193.203.166.112",
    user: "u475816193_onlywater",
    password: "Sf~l7A81:8z",
    database: "u475816193_onlywater",
    multipleStatements: true,
});

mysqlConexion.connect(
(err) =>{
     if(!err){
            console.log("estoy conectado a la base de datos Mysql");
     }
     else{
            console.log("no estoy conectado. error");
        }
    }

);

module.exports = mysqlConexion;