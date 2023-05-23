const mongoose = require("mongoose");
const autoIncrement = require("@alec016/mongoose-autoincrement")
autoIncrement.initialize(mongoose.connection)
const schema = mongoose.Schema;

const memberSechema = new schema({
    _id: Number,
    fullName:{type:String ,required:true},
    email:{type:String ,required:true},
    password:{type:String ,required:true},
    books:[ {type:Number,ref:"books"}]
  });
  memberSechema.plugin(autoIncrement.plugin, {
    model: 'memberSechema',
    field: "_id",
    digits: 4,
    startAt: 1,
    incrementBy: 1,
    unique: true
  
  });



 mongoose.model("members", memberSechema);




