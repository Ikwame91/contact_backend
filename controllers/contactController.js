const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const mongoose = require("mongoose");

//asynchandler is a wrapppre function(or middleware) that simplifies error handling
//for async function in Expresss. it catches errors thrown inside the async function and passed them
//to Express's error-handling middleware

//@desc Get all contacts
//@route Get /api/contacts
//@access Private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id:req.user.id});
  res.status(200).json(contacts);
});

//@desc Get contact
//@route GET /api/contact/:id
//@access Private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Post contact
//@route Post /api/contact/:id
//@access Private
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

  res.status(201).json(contact);
});

//@desc Update contacts
//@route Post /api/contacts/:id
//@access Private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updateContact);
});

//@desc Delete contact
//@route DELETE /api/contact/:id
//@access Private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
  }
  await contact.deleteOne();
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  updateContact,
  getContact,
  deleteContact,
  createContact,
};
