const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  cart: { type: Object, required: true },
  email: { type: String },
  city: { type: String, required: true },
  postalCode:{type:Number},
  contact:{type:Number},
});
module.exports = mongoose.model("Order", orderSchema);
