// // src/config/db.js
// const mongoose = "mongoose";

//   const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ MongoDB Connected Successfully!");
//   } catch (err) {
//     console.error("❌ MongoDB Connection Error:", err.message);
//     process.exit(1); // Exit if DB connection fails
//   }
// };
 
// export default connectDB;
const mongoose = require("mongoose");
export const connectDB = async() => {
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
}

 