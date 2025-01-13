//@desc Get all contacts
//@route Get /api/contacts
//@access Public
const getContacts = async(req, res) => {
  res.status(200).json({ message: "get all contacts " });
};

//@desc Get contact
//@route GET /api/contact/:id
//@access Public
const getContact = async(req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Post contact
//@route Post /api/contact/:id
//@access Public
const createContact = async(req, res) => {
  console.log("The req body is ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Please enter all required fields");
  }

  res.status(200).json({ message: `Create contact ` });
};

//@desc Update contacts
//@route Post /api/contacts/:id
//@access Public
const updateContact = async(req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
};

//@desc Delete contact
//@route DELETE /api/contact/:id
//@access Public
const deleteContact =async (req, res) => {
  res.status(200).json({ message: `delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  updateContact,
  getContact,
  deleteContact,
  createContact,
};
