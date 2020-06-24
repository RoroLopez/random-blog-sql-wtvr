let createError = require('http-errors');
let express = require('express');
let bodyParser = require('body-parser');
let cors  = require('cors');
let logger = require('morgan');
let mysql = require('mysql');

let indexRouter = require('./routes/index');
let userRouter = require('./routes/mysql/mysql');
//let usersRouter = require('./routes/users');

let app = express();

//mysql connection
let con = mysql.createConnection({
  host: "localhost",
  database: "blog",
  port: "3306",
  user: "root",
  password: "admlnx1"
});

con.connect((err) => {
  if (err) console.log(err);
  else console.log('mysql connected...');
});

module.exports.connection = con;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
