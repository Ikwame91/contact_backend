const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const mongoose = require("mongoose");

//@desc get all contacts
//@route Get /api/contacts
//@access Private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access Private
const getContact = asyncHandler(async (req, res) => {
  // Validate ObjectId format first
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Post contact
//@route Post /api/contact/
//@access Private
const createContact = asyncHandler(async (req, res) => {
  console.log("The req body is ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please enter all required fields");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//@desc Update contacts
//@route PUT /api/contacts/:id
//@access Private
const updateContact = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

//@desc Delete contacts
//@route Delete /api/contacts/:id
//@access Private
const deleteContact = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  updateContact,
  getContact,
  deleteContact,
  createContact,
};
