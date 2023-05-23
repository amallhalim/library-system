// require("../models/bookModel");
const mongoose = require("mongoose");
require("../models/memberModel")
const Member = mongoose.model("members");
require("../models/bookModel")
const Book = mongoose.model("books");

// const autoIncrement = require("@alec016/mongoose-autoincrement");
// autoIncrement.initialize(mongoose.connection);

exports.getAllmember = function (req, res, next) {
  // res.status(201).json("getallbook");
  Member.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => next(error));
};
exports.postmember = function (req, res, next) {
  const object = new Member({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    books: req.body.books,
  });
  object
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => next(error));
};



exports.getbookofmember = function (req, res, next) {
        Member.findOne({ _id: req.params.id }, { books:1})
        .populate({ path: "books", select:{'title':1,"noOFcopies":1,"_id":0}  })
        .then((book) => {
          console.log(book.books.length)

          if (book.books.length < 1) {
            res.json("can borrow book");
          } else {
            res.json(" sorry can`t borrow book");
          
          }
          })
    }


// exports.getmemberBYid = function (req, res, next) {
//   console.log(req.params.id)
//   Member.findOne({ _id: req.params.id })
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((error) => next(error));
// };
exports.deleteBYid = function (req, res, next) {
  Member.deleteOne({ _id: req.body.id })
    .then((data) => {
      if (data.deletedCount == 0) {
        throw new Error("member its found to delete it");
      } else {
        res.json(data);
      }
    })
    .catch((error) => next(error));
};




