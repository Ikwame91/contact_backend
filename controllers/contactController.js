const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//asynchandler is a wrapppre function(or middleware) that simplifies error handling
//for async function in Expresss. it catches errors thrown inside the async function and passed them
//to Express's error-handling middleware

//@desc Get all contacts
//@route Get /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Get contact
//@route GET /api/contact/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc Post contact
//@route Post /api/contact/:id
//@access Public
const createContact = asyncHandler(async (req, res) => {
  console.log("The req body is ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please enter all required fields");
  }

  //in the ES6 if the key and value are the same you just repeat the same thing
  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(200).json(contact);
});

//@desc Update contacts
//@route Post /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
});

//@desc Delete contact
//@route DELETE /api/contact/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  updateContact,
  getContact,
  deleteContact,
  createContact,
};
