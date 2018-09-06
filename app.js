const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./api/routes/auth');
const userRoutes = require('./api/routes/user');

mongoose.connect('mongodb://localhost:27017/sepetdb', {useNewUrlParser: true});

app.set('view engine', 'ejs');
app.use("/assesments", express.static(__dirname + '/assesments'));
app.use(express.static('./assesments'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes which are reaching api folder
;
app.use('/auth', authRoutes);
app.use('/user', userRoutes);


app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
