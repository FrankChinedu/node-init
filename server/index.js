const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Routes = require('./routes/v1');

require('express-jsend');

//set up express  app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/emailAnalytics', {
  useNewUrlParser: true
}); // local
//, { useNewUrlParser: true }
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to mongoo'); // we're connected!
});

//body parser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

Routes(app);

//initilize routes


//listen for request 
app.listen(4000, function () {
  console.log('listening in port 4000');
});