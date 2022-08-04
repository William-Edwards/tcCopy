const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const jwt = require('./config/jwt');
const errorHandler = require('./config/error-handler');

// configs database
require('./config/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());

//import user model
require('./models/account.model')


//user routes
app.use('/accounts', require('./routes/users.controller'));

// global error handler
app.use(errorHandler);

// set up server port 3000
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'));