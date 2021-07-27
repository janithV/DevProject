const sql = require('mysql');

var mysqlrdbConnection = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"recommenderdb",
    multipleStatements: true
});

//create connection
mysqlrdbConnection.connect((err)=>{
    if(!err){
        console.log("connection to rdb Successful");
    }
    else{
        console.log(err);
    }
});

module.exports=mysqlrdbConnection;