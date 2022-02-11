require('dotenv').config();

const connectDB = require('./db/connect');

const Product = require('./models/products');

const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.create(jsonProducts);
    console.log('Product has been populated to the database');
  } catch (error) {
    console.log(error);
  }
};

start();
