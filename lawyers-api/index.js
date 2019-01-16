require("dotenv").config();
const express = require('express');
const logger = require('morgan');
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('The Lawyers ..');
})
//athuntcation
// const port = process.env.DEV_PORT;
// const authController = require("./controllers/authController");
// app.use("/api/", authController);

// ADD YOUR CONTROLLER HERE!!!
const LawyersController = require('./controllers/LawyersController');
app.use('/lawyers', LawyersController);

const LawyersDashCont = require('./controllers/LawyersDashCont');
app.use('/lawyers/dashboard', LawyersDashCont);

const DashboardController = require('./controllers/DashboardController');
app.use('/dashboard', DashboardController);

app.listen(port, () => {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});