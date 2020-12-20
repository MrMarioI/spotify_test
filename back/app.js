const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(__dirname + '../public'));

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: true
})); // allow parsing nested objects in query
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// Vérification de la connection au PORT définit dans le .env
app.listen(process.env.PORT, () => {
  console.log("BACKEND server listening on port", process.env.PORT)
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;