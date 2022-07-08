const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const jwt = require('./config/jwt')

// configs database
require('./config/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//import user model
require('./models/user.model')

// jwt auth
app.use(jwt());

//user routes
app.use('/users', require('./routes/users.controller'));


// set up server port 3000
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'));

