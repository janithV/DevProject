const sql = require('mysql');

var mysqlConnection = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"enrollddatabase",
    multipleStatements: true
});

//create connection
mysqlConnection.connect((err)=>{
    if(!err){
        console.log("connection Successful");
    }
    else{
        console.log(err);
    }
});

module.exports=mysqlConnection;