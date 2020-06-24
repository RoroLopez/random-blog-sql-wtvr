let mysql = require('../../app');
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

router.post('/insertCredentials', (req, res) => {
  console.log(req.body);
  let query = 'insert into users (user, passwd) values (' + req.body.username + ', ' + req.body.password + ')';
  console.log(query);
  return res.status(200).json({
    status: 'success'
  });
  // res.send(query);
  // res.redirect('localhost:3000/');
  // mysql.connection.query(query, (err, result) => {
  //   if (err) throw err;
  //   console.log('credentials inserted');
  //   res.redirect("localhost:3000/landing/" + req.body.username);
  // });
});
  
  module.exports = router;