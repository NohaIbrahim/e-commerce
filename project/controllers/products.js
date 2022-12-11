var fs=require("fs");
var productModel=require("../models/products")
function patchproduct(id,title){
  return productModel.findByIdAndUpdate(id,title)
    
  }

function deleteproduct(id){
   return productModel.findByIdAndRemove(id)
        
  }
function postproduct(newdata){
   return productModel.create(newdata)
          
   }
    
  function getproduct(){
    return productModel.find()
      
    }

 function getproducts(id){
    return productModel.find(id)
      
    }

   

 
   module.exports ={postproduct,patchproduct,deleteproduct,getproduct,getproducts}

  