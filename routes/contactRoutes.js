const express = require("express");
const router = express.Router();
const {
  getContact,
  getContacts,
  updateContact,
  deleteContact,
  createContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;


// router.get("/", getContacts);
// router.post("/", createContact);
// router.get("/:id", getContact);
// router.put("/:id", updateContact);
// router.delete("/:id", deleteContact);

// router.get (seperate calls for each Http method)
// router.route(chains multiple HTTP methods for the same path)

// router.route("/")
//   .get(getContacts)
//   .post(createContact);

// router.route("/:id")
//   .get(getContact)
//   .put(updateContact)
//   .delete(deleteContact);
