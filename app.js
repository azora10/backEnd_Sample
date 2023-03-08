const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

//modal
const userModal = require("./models/userModal");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/public", express.static("./public"));

const userRoutes = require("./routes/user");

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("hello this is azar");
});

app.listen(7070, () => {
  console.log("port is running in 7070");
});
