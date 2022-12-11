var express = require('express');
var router = express.Router();
const fs = require("fs");
var  productModel = require("../models/products")
var {auth}=require("../middlewares/auth")  


//var {getproduct} = require("../controllers/products");


router.use(auth)
router.get("/", async function (req, res) {
    try {var productname=req.query.productname
        var result
        if(productname){
            result== await productModel.find({
                name:{
                    $in:[productname],
                }
            }).populate("sellerId")
        }
        else{result=productModel.find()}
      
      res.status(200).json(result);
  
    } catch (err) {
      res.status(422).json("nooo");
    }
  });
  router.get("/", async function (req, res) {
    try { //var todoId = req.params.id;
      var data = await getproduct();
      res.json(data);
  
    } catch (err) {
      res.status(422).json("nooo");
    }
  });
  module.exports = router