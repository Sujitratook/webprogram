const express = require('express');
const app = express();
const billRouter = express.Router();
const Bill = require('../models/bill');
const Order = require('../models/order');
const Custo = require('../models/customer');
const Orderde = require('../models/orderDetail');
const Emp = require('../models/employee');

billRouter.route('/').get(function (req, res) {
  Bill.findOne({ ID_bill: 1 }, function (err, bill) {
    Order.findOne({ ID_order: bill.ID_order }, function (err, order) {
      Custo.findOne({ ID_customer: order.ID_customer }, function (err, custo) {
        Orderde.find({ ID_order: order.ID_order }, function (err, orderde) {
          Emp.findOne({ ID_employee: order.ID_employee }, function (err, emp) {
            res.render('ใบเสร็จการซ่อม', { custo: custo, bill: bill, orderde: orderde, emp: emp });
          });
        });
      });
    });
  });
});

module.exports = billRouter;