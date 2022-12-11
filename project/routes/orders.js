var express = require('express');
var router = express.Router();
const fs = require("fs");

var {auth,}=require("../middlewares/auth")  


var {postorder,patchorder,deleteorder,getorder} = require("../controllers/orders");


// router.use(auth)

router.get("/", async function (req, res,next) {
  try {
    var data = await getorder();
    res.json(data);

    } catch (err) {
      res.status(422).json("nooo");
    }
  });
  
router.post("/", async function (req, res, next) {
   try{
    var newtodo = {name:req.body.name,userId:req.userId};  
    var result = await postorder(newtodo);
    res.json(result);
} catch (err) {
res.status(422).json("ther is an error");
}
})

router.patch("/:id", async function (req, res, next) {

try {
    var todoId = req.params.id;
    var statu = req.body.statu;

    var found = await patchorder(todoId, statu);

    res.json(found);
} catch (err) {
    res.status(422).send(err);
}

})

router.delete("/:id", async function (req, res, next) {
try {
    var todoId = req.params.id;
    var found = await deleteorder(todoId);

    res.json(found);
} catch (err) {
    res.status(422).send(err);
}
})

// router.get("/", async function (req, res) {//auth  auth1
//   try {
//     var data = await getorder();
//     res.json(data);

//   } catch (err) {
//     res.status(422).send(err);
//   }
// });

// router.post("/", async function (req, res, next) {
//  try{
      
//     //  var newtodo = {name:req.body.name,sellerId:req.sellerId};  
//     var neworder = req.body;
//       var result = await postorder(neworder);
//       res.json(result);
//  } catch (err) {
//   res.status(422).send(err);
//  }
// })

// router.patch("/:id", async function (req, res, next) {
//   try {
//     var todoId = req.params.id;
//     var statu = req.body;

//     var found = await patchorder(todoId, statu);

//     res.json(found);
// } catch (err) {
//     res.status(422).send(err);
// }

// })

// router.delete("/:id", async function (req, res, next) {
// try {
//     var todoId = req.params.id;
//     var found = await deleteorder(todoId);

//     res.json(found);
// } catch (err) {
//     res.status(422).send(err);
// }
// })




 module.exports = router