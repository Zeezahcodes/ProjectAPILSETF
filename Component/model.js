const mongoose = require("mongoose");

const schemaStructure = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: [true, "This name already exist"],
  },
  colour: {
    type: String,
    required: true,
    unique: [true, "This colour already exist"],
  },
  yard: {
    type: String,
    required: true,
    unique: [true, "This name already exists"],
  },
  price: {
    type: String,
    required: true,
    unique: [true, "This name already exists"],
  },
});

module.exports = mongoose.model("clothings", schemaStructure);