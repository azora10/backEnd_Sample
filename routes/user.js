const express = require('express');
const router = express.Router();
const users = require('../controllers/user');

const multer = require("multer");
const user = require('../models/userModal');

const imgconfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    cb(null, `image-${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({ storage: imgconfig });

// createUser
router.post('/createUser', upload.single('image'), users.createUser);

//login
router.post('/loginUser', users.loginUser);

module.exports = router;
