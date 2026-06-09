const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);

app.use("/api/ai", require("./routes/aiRoutes"));

app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: err.message,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



