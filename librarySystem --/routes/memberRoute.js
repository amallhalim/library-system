const express = require("express");
const memberController = require("../controllers/memberController");

const Router = express.Router();

Router.route("/members")
  .get(memberController.getAllmember)
  .post(memberController.postmember)
  .delete(memberController.deleteBYid);

Router.route("/members/:id")
.get(memberController.getbookofmember);

Router.route("/members/:id/book").get(memberController.getbookofmember);

module.exports = Router;
