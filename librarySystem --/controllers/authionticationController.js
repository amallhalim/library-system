const mongoose = require("mongoose");
require("../models/memberModel");
const Member = mongoose.model("members");

const Admin = mongoose.model("admins");



// check if are has name and pasword to login in


exports.login = (req, res, next) => {
    if (req.body.fullName == "ahmad" && req.body.password == "123") {
      // ================
      // console.log(res); // generate token
      var token;
      var jwt = require("jsonwebtoken"); //create token object
  
      token = jwt.sign(
        {
          password: req.body.password,
          username: "admin",
          role: "admin",
  
          id: 100,
        },
        process.env.secretKey,
        { expiresIn: "100h" }
      );
      res.json({ data: "ok", token });
    } else{
        
        res.status(200).json("not_admin");
        Member.findOne({fullName:req.body.fullName}).then((data=>{
            if (!data) {
                res.json("not_member_in system");

            } else {
                res.json("");

            }
        }))

    }
}
    // else {