const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contacts', { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;


