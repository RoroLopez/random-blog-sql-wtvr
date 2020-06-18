let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mysql = require('mysql');

let indexRouter = require('./routes/index');
let userRouter = require('./routes/mysql_operations');
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

//export for mysql operations in other routes
module.exports.connection = con;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
//app.use('/users', usersRouter);

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
