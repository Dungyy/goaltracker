import express, { json, urlencoded } from "express";
import errorHandler from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import router from "./routes/goalRoutes.js";
const PORT = process.env.PORT || 5000;
import colors from "colors";

// APP
const app = express();

//connection to database
connectDB();

// middleware
app.use(json());
app.use(urlencoded({ extended: false }));

// routes
app.use("/api/", router);

// Uses our error handler and overwrites defaults for checking break
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(
    "Server is live and running on port: ".bgBlack + `${PORT}`.bgGreen
  )
);
