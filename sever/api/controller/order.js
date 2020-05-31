
const mongoose = require("mongoose");
const Order = require("../models/order");
const Product = require("../models/product");

exports.all_orders = (req, res, next) => {
  Order.find()
    
    .populate("product", "price")
    .exec()
    .then((docs) => {
      console.log(docs);
      const response = {
        count: docs.length,
        orders: docs.map((doc) => {
          return {
            _id: doc._id,
            fname: doc.fname,
            lname: doc.lname,
            userName: doc.userName,
            cart: doc.cart,
            postalCode:doc.postalCode,
            email:doc.email,
            city:doc.city,
            url: {
              type: "GET",
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch();
};

exports.create_order = (req, res, next) => {
  //we  will check first that product id exist
   let p=req.body.cart;

      const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        contact: req.body.contact,
        userName: req.body.userName,
        cart: JSON.parse(p),
        postalCode: req.body.postalCode,
        city:req.body.city,
        email:req.body.email
      });

    order.save().then((result) => {
      res.status(201).json({
        created: "Order Is taken",
    })
  })
    .catch((err) => {
      console.log("error");
      res.status(500).json({
        mess: err,
      });
    });
};


