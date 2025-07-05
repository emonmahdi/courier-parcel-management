// ✅ Must be first
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { AuthRoutes } = require("./modules/auth/auth.routes");
const { UserRoutes } = require("./modules/user/user.routes");
const { ParcelRoutes } = require("./modules/parcel/parcel.route");
// const { AuthRoutes } = require("./modules/auth/auth.routes");

// Load environment variables
// dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// call the route
app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/parcels", ParcelRoutes);

// MongoDB Connection URI
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
    // Start the Express server after successful database connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1); // Exit the process if connection fails
  });

// test route
app.get("/", (req, res) => {
  res.send("Courier Parcel Management Backend Running!");
});
