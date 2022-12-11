var fs=require("fs");
var orderModel=require("../models/orders")
function patchorder(id,title){
  return orderModel.findByIdAndUpdate(id,title)
    
  }

function deleteorder(id){
   return orderModel.findByIdAndRemove(id)
        
  }
function postorder(newdata){
   return orderModel.create(newdata)
          
   }
    
  function getorder(){
    return orderModel.find()
      
    }

   

 
   module.exports ={postorder,patchorder,deleteorder,getorder}
