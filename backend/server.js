const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const app = express();

//connection to database
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/", require("./routes/goalRoutes"));

// Uses our error handler and overwrites defaults for checking break
// Set env file to production to use default error handler
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server is live and running on port: ${PORT}`)
);
