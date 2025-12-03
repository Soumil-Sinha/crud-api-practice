const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true,"Enter the Player's Name : "]},
    jerseyNumber: {
        type: Number, 
        required: [true,"Enter the Player's Jersey Number :"],
        default: 0,},
    position: {
        type: String, 
        required: [true,"Enter the Player's Position in shorthand : "]},
    team: {
        type: String, 
        required: [false,"Enter the Player's Team Name in shorthand : "]},
},
{
    timestamps: true,
}
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;