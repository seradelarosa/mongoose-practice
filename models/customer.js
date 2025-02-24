const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema ({

});

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;