const Product = require('../models/product.model');

const insertPlayer = async (req, res) => {
    try {
        const created = await Product.create(req.body);
        return res.status(201).json(created);
    } catch (error) {
        console.log('Error in creating product:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};

// function to print all players
const getPlayers = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log('Error in getting products:', error);
        res.status(500).json({ message: error.message });
    }
};

const getPlayerById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.log('Error in fetching product by id:', error);
        res.status(500).json({ message: error.message });
    }
};

const updatePlayer = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.log('Error in updating product:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: error.message });
    }
};

const deletePlayer = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.log('Error in deleting product:', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    insertPlayer,
    updatePlayer,
    getPlayerById,
    deletePlayer,
    getPlayers,
};