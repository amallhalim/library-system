const express = require("express");
const mongoose = require("mongoose");

const AdminController = require("../controllers/adminController");


const Router = express.Router();

Router.route("/admin")
  .get(AdminController.getAlladmin)
  .post(AdminController.postadmin)
//   .patch(bookController)
  .delete(AdminController.deleteBYid);

  module.exports = Router;
