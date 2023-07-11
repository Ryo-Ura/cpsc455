const mongoose = require("mongoose");

// Define the schema for the items collection
const itemSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    itemName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String, required: true },
    manufacturer: { type: String, required: false },
    purchaser: { type: String, required: false },
});

// Create the Item model based on the schema
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
