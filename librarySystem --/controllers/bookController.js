require("../models/bookModel");
const mongoose = require("mongoose");

const Book = mongoose.model("books");

const autoIncrement = require("@alec016/mongoose-autoincrement");
autoIncrement.initialize(mongoose.connection);

exports.getAllBooks = function (req, res, next) {
    // res.status(201).json("getallbook");
  Book.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.postBooks = function (req, res, next) {
  const object = new Book({
    title: req.body.title,
    auther: req.body.auther,
    pages: req.body.pages,
    noOFcopies: req.body.noOFcopies,
    shelfNo: req.body.shelfNo,
  });
  object
    .save()
    .then((data) => {
      res.status(201).json(req.body);
    })
    .catch((error) => next(error));
};
exports.getBookBYname = function (req, res, next) {
  Book.findOne({ title: req.params.name })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.getBookBYauther = function (req, res, next) {
  // console.log
  Book.findOne({ auther: req.params.auther })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.getBookBYid = function (req, res, next) {
  Book.findOne({ _id: req.params.id })
  .then((data) => {
      console.log(data)
      res.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.checkt_enoughcopy = function (req, res, next) {
  Book.findOne({ _id: req.params.id })
  .then((data) => {
    if (data.noOFcopies > 1) {
      res.status(200).json("can borrow the book");
    }
    else{
      res.status(200).json("sorry acn't borrow the book");
    }
    console.log(data)
    })
    .catch((error) => next(error));
};


exports.getBookBYid = function (req, res, next) {
  Book.findOne({ _id: req.params.id })
  .then((data) => {
      console.log(data)
      res.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.deleteBYid = function (req, res, next) {
    console.log(req.body.id )
  Book.deleteOne({_id: req.body.id })
  .then((data) => {
    if (data.deletedCount == 0) {
      throw new Error("book its found to delete it");
    } else {
      res.json(data);
    }
  })
  .catch((error) => next(error));
};






exports.checkNumberOFbookAvailable = function (req, res, next) {
  Book.findOne({_id: req.body.id })
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((error) => next(error));
};


