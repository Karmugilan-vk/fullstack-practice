const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

app.use(logger);
app.use(express.json());

app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World with Logger Middleware!");
});

app.use((req, res) => {
    res.status(404).send("404 - Route Not Found");
});

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log(" MongoDB Atlas connected"))
  .catch((err) => console.error(" MongoDB connection error:", err));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});