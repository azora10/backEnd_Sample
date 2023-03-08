const usermodel = require("../models/userModal");
const resFormat = require("./Error_Res/error");

exports.createUser = (req, res) => {
  usermodel
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((user) => {
      if (!user) {
        const userData = req.body;
        userData.image = req.file.filename;
        usermodel
          .create(userData)
          .then((createdUser) => {
            const response = resFormat.success(createdUser);
            res.status(200).json(response);
          })
          .catch((err) => {
            const response = resFormat.error(500, "Server Error");
            res.status(500).json(response);
          });
      } else {
        const response = resFormat.error(409, "Email Id already registered");
        res.status(409).json(response);
      }
    })
    .catch((err) => {
      const response = resFormat.error(500, "Server Error");
      res.status(500).json(response);
    });
};

exports.loginUser = (req, res) => {
  console.log("hello world");
  console.log(req.body);
  const { email, password } = req.body;
  var a = usermodel
    .findOne({
      where: {
        email: email,
      },
    })
    .then((a) => {
      if (a == null) {
        const response = resFormat.error(404, "User not found");
        res.status(404).json(response);
      } else if (a.password == password) {
        const response = resFormat.success(a);
        res.status(200).json(response);
      } else {
        const response = resFormat.error(401, "Username or Password Incorrect");
        res.status(401).json(response);
      }
    })
    .catch((error) => {
      const response = resFormat.error(500, "Server Error");
      res.status(500).json(response);
    });
};
