var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contracts');

module.exports = mongoose
