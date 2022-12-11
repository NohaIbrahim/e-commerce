var mongoose = require("mongoose");

var productsSchema = mongoose.Schema({
 name: { type:"String", required:true },
   describtion:{type:"String"},
    photo:{type:"String",maxLength:10},
    ceatedAt:{type:"date"},
    
   
 
  sellerId:{
    type:mongoose.Schema.ObjectId,
    ref:"Seller"
  }
});



var productModel=mongoose.model("Product",productsSchema)



module.exports=productModel




