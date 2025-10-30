const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc registe a user
//@route Get /api/contacts
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log("user data", req.body);
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const userAvailble = await User.findOne({ email });
  if (userAvailble) {
    res.status(400);
    throw new Error("Email already taken");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashed password", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);

  res.json({ message: "User registered successfully" });
});

//@desc login a user
//@route Get /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await User.findOne({
    email,
  });

  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN,
      { expiresIn: "10m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
});

//@desc current state of a user
//@route Get /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

//get all users
const getAllUsers = asyncHandler(async (req, res) => {
   
  const users = await User.find({

  });
  res.status(200).json(users);
  
}
);


module.exports = {
  registerUser,
  loginUser,
  currentUser,
  getAllUsers,
};
