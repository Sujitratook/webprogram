const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bill = new Schema({
  ID_bill: {
    type: Number
  },
  ID_order: {
     type: Number
  },
  details: {
    type: String
  },
  price: {
    type: Number
  },
  VAT: {
    type: Number
  },
  totalPrice: {
    type: Number
  },
  bill_type: {
    type: String
  },
  date: {
    type: String
  }
},

{
    collection: 'TRN_bill'
});

module.exports = mongoose.model('Bill', Bill);