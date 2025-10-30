const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandlers } = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

connectDB();
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Use the error handler middleware at the end
app.use(errorHandlers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
