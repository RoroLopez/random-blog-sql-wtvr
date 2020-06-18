let mysql = require('../app');
let express = require('express');
let router = express.Router();

router.get('/checkCredentials', (req, res, next) => {
  mysql.connection.query('select * from users',
  (err, rows) => {
    console.log(rows);
    res.redirect("/")
    //res.send(rows);
  });
});

// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
//   });
  
  module.exports = router;