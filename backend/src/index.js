import express from "express";
import mongoose from "mongoose"
import dotenv from dotenv
import cors from cors

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


// test route
app.get('/', (req, res) => {
    req.send('Courier Parcel Management Backend Running!')
});


// Connect to DB and Start Server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error("DB Connection Error:", err));