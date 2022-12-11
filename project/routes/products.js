
var express = require('express');
var router = express.Router();
const fs = require("fs");

var {auth1}=require("../middlewares/auth1")  //seller
var {auth,}=require("../middlewares/auth")  //user



var {postproduct,patchproduct,deleteproduct,getproduct} = require("../controllers/products");


//router.use(auth1)


router.get("/", async function (req, res) {//auth  auth1
    try {
      var data = await getproduct();
      res.json(data);
  
    } catch (err) {
      res.status(422).json("nooo");
    }
  });
  
router.post("/",auth1, async function (req, res, next) {
   try{
        
       var newtodo = {name:req.body.name,sellerId:req.sellerId};  
        var result = await postproduct(newtodo);
        res.json(result);
   } catch (err) {
    res.status(422).json("ther is an error");
   }
})

router.patch("/:id",auth1, async function (req, res, next) {

    try {
        var todoId = req.params.id;
        var statu = req.body.statu;

        var found = await patchproduct(todoId, statu);

        res.json(found);
    } catch (err) {
        res.status(422).send(err);
    }

})

router.delete("/:id",auth1, async function (req, res, next) {
    try {
        var todoId = req.params.id;
        var found = await deleteproduct(todoId);

        res.json(found);
    } catch (err) {
        res.status(422).send(err);
    }
})


module.exports = router