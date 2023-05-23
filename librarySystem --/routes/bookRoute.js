const express = require("express");
const mongoose = require("mongoose");

const bookController = require("../controllers/bookController");

const Router = express.Router();

Router.route("/books")
  .get(bookController.getAllBooks)
  .post(bookController.postBooks)
  .delete(bookController.deleteBYid);

  Router.route("/books/:id").get(bookController.getBookBYid);
  Router.route("/books/:id/member").get(bookController.getBookBYid);
// Router.route("/books/:id").get(bookController.checkNumberOFbookAvailable);
Router.route("/books/name/:name").get(bookController.getBookBYname);
Router.route("/books/auther/:auther").get(bookController.getBookBYauther);
Router.route("/books/:id/check").get(bookController.checkt_enoughcopy);

module.exports = Router;
