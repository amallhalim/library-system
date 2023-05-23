const mongoose = require("mongoose");
const autoIncrement = require("@alec016/mongoose-autoincrement")

autoIncrement.initialize(mongoose.connection);
const schema = mongoose.Schema;

const bookSechema = new schema({
    _id: Number,
    title:{type:String ,required:true},
    auther:{type:String ,required:true},
    pages:{type:String ,required:true},
    noOFcopies:{type:Number ,required:true},
    shelfNo:{type:Number ,required:true},
  });

  bookSechema.plugin(autoIncrement.plugin, {
    model: 'bookSechema',
    field: "_id",
    digits: 4,
    startAt: 1,
    incrementBy: 1,
    unique: true
  
  });
 

 mongoose.model("books", bookSechema);
