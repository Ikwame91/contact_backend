const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const mongoose = require("mongoose"); // Add this import
//@desc get all contacts
//@route Get /api/contacts
//@access Private

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();

  res.status(200).json(contacts);
});

//@desc Get contact
//@route GET /api/contact/:id
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
    throw new Error("Please enter all required fields"); // Use throw instead of res.status().json()
  }

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
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updateContact = await Contact.findByIdAndUpdate()

  res.status(200).json({ message: `Update contact with id ${req.params.id}` });
});

//@desc Delete contacts
//@route Delete /api/contacts/:id
//@access Private
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact with id ${req.params.id}` });
});

module.exports = {
  getContacts,
  updateContact,
  getContact,
  deleteContact,
  createContact,
};
