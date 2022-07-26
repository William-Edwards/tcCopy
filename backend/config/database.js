const mongoose = require('mongoose');
require('dotenv').config();

const devConnection = process.env.DB_STRING;

mongoose.connect(devConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Database connected');
});

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}

module.exports = {
    isValidId
}
