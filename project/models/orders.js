var mongoose = require("mongoose");

var ordersSchema = mongoose.Schema({
  
    statues:{type:"String"},
    ceatedAt:{type:"date"},
    updatedAt:{type:"date"},
    amount:{type:Number,require:true},
   
 
  userId:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
  },
  productId:[{
    type:mongoose.Schema.ObjectId,
    ref:"Product"
  }]
});



var orderModel=mongoose.model("Order",ordersSchema)




module.exports=orderModel

