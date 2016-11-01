/**
 * Created by wangy on 2016/10/31.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
    host:"qdm216841450.my3w.com",
    user:"qdm216841450",
    password:"Wy564951229",
    port:"3306",
    database:"qdm216841450_db",
    insecureAuth:"true"
});

/* GET home page. */
router.get('/', function(req, res, next) {
    connection.query("select * from wp_users",function(error,rs,status){
        if(error){
            res.write("-1");
            res.end();
        }else{
            res.write(JSON.stringify(rs));
            res.end();
        }
    });
});

module.exports = router;