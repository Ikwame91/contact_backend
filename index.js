const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;


connectDB();

app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});



// app.get("/api/contacts", (req, res) => {
//   res.json({message:"Get all mf contacts"});
// });