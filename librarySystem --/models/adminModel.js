const mongoose = require("mongoose");
const autoIncrement = require("@alec016/mongoose-autoincrement")

autoIncrement.initialize(mongoose.connection);
const schema = mongoose.Schema;

const admainSechema = new schema({
    _id: { type:Number, auto: true },
    fullName:{type:String ,required:true},
    email:{type:String ,required:true},
    password:{type:String ,required:true}

  });

  admainSechema.plugin(autoIncrement.plugin, {
    model: 'admainSechema',
    field: "_id",
    digits: 4,
    startAt: 1,
    incrementBy: 1,
    unique: true
  
  });
 

 mongoose.model("admins", admainSechema);
