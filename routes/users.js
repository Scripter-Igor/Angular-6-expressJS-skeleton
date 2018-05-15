var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'heihachi_scripts'
});
  
connect.connect(function(error){
    if(!!error){
        console.log("Connection error");
    }else{
        console.log("connected");
    }
});


/**
 *  Get all users
 */
router.get("/users",(req, res) => {
    connect.query("SELECT * FROM data", function(error, rows, fields){
        if(!!error){
            console.log("Error in query");
        }else{
            res.json(rows);
        }
    });
}); 

/**
 * Get a specific user
 * @param name = the username 
 */
router.get("/users/:name",(req, res) => {
    var name = req.params.name;
    connect.query("SELECT * FROM data WHERE username = ?",[name], function(error, rows, fields){
        if(!!error){
            console.log("Error in query");
        }else{
            res.json(rows);
        }
    });
});

/**
 * Create a user
 */
router.post("/users",(req, res) => {
    var user = req.body;
    console.log(user);
    connect.query("INSERT INTO data VALUES(?,?,?,?,?)",[user.username, user.exp, user.timeran,user.moneymade, user.script],(error, rows, fields) => {
        if(error){
            console.log(error);
            res.send(error);
        }else{
            res.json(rows);
        }
    });
    //res.send(201, req.body);
});

/**
 * Update a user
 */
router.patch("/users/:name",(req, res) => {
    var user = req.body;
    console.log(user);
    connect.query("UPDATE data SET exp = ?, timeran = ?, moneymade = ? WHERE username = ?", [user.exp, user.timeran, user.moneymade, user.username], (error, rows, fields) => {
        if(error){
            res.send(error);
        }else{
            res.json(rows);
        }
    });
});

/**
 * Delete a user
 */
router.delete('/users/:name',(req, res) => {
    var user = req.body;

    connect.query("DELETE FROM data WHERE username = ?", [user.username], (error, rows, fields) => {
        if(error){
            res.send(error)
        }else{
            res.json(rows);
        }
    })
});

module.exports = router;