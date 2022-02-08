require("dotenv");
const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
// middleware
app.use(express.json());

//  routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products</a>');
});

// server
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async (req, res) => {
  try {
    app.listen(
      port,
      console.log(`Serer Connected, Listening on Port: ${port}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
