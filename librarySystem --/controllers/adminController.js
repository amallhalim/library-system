require("../models/adminModel");
const mongoose = require("mongoose");

const Admin = mongoose.model("admins");

const autoIncrement = require("@alec016/mongoose-autoincrement");
autoIncrement.initialize(mongoose.connection);

exports.getAlladmin = function (req, res, next) {
  // res.status(201).json("getallbook");
  Admin.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.postadmin = function (req, res, next) {
  const object = new Admin({
    fullName: req.body.fullName,
    password: req.body.password,
    email: req.body.email,
  });
  object
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => next(error));
};

exports.deleteBYid = function (req, res, next) {
  Admin.deleteOne({ _id: req.body.id })
    .then((data) => {
      if (data.deletedCount == 0) {
        throw new Error("admin its found to delete it");
      } else {
        res.json(data);
      }
    })
    .catch((error) => next(error));
};


