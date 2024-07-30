const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema(
  {
    name:{
        type:String,
        require:true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", categoriesSchema);