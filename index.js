const express = require('express');
const mongoose = require('mongoose');
const productRoute = './routes/product.route.js';
const app = express();

//middleware
app.use(express.json());

//routes
app.use('/api/products', require(productRoute));

app.get('/', (req, res) => {
  res.send('Node API nodemon updated bababab');
});


mongoose.connect('mongodb+srv://soumil_sinha:<db_password>@backenddb.ifhwyrq.mongodb.net/?appName=BackendDB').then(()=>{
        console.log("Connected to MongoDb successfully");
        app.listen(3000, () => {
        console.log('Server is running on port 3000');
        });     
        }).catch(()=>{
            console.log("Connection to mongoDb failed");
        });
