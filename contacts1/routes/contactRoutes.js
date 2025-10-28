const express = require("express");
const router = express.Router();
const {
  getContact,
  getContacts,
  updateContact,
  deleteContact,
  createContact,
} = require("../controller/contact_contraller");

//@desc Get all contacts
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
