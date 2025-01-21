const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;


connectDB();

app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRouter'));

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});



// app.get("/api/contacts", (req, res) => {
//   res.json({message:"Get all mf contacts"});
// });

//JWT web token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.   header algorithm of the token
// eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.  payload that has the user information
// SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c   signature of the token for verification

// JWT is used to authenticate and authorize users in an application                
// It is a compact, URL-safe means of representing claims to be transferred between two parties
// The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature
//  (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally 
// signed or encrypted     
