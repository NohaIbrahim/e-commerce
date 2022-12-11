const express = require("express");
var productsRoutes = require('./routes/products')
var usersRoutes = require('./routes/users')
var sellersRoutes = require('./routes/sellers')
var ordersRoutes = require('./routes/orders')
// var userRoutes = require('./routes/productss')

var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/mearn")

var app = express();



app.use(express.json())




app.use("/products", productsRoutes);
app.use("/users", usersRoutes)
app.use("/sellers", sellersRoutes)
app.use("/orders", ordersRoutes)
// app.use("/products", userRoutes);

//app.use("*",function(req,res,next){
//res.status(408).json("not found")
//})


app.listen(4000, () => {
  console.log("server listening on port 4000");
});
