var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var sellerSchema = mongoose.Schema({
   sellerName: {
      type: String,
      unique: true,
      minLength: 8,
      
      required: true
   },
   password: {
      type: String,
      required: true,
     
   },
   isAdmin:{type:Boolean,default:false},
   productId:[{
    type:mongoose.Schema.ObjectId,
    ref:"Product"
  }]
})
sellerSchema.pre("save", function (next) {

   const z = bcrypt.genSaltSync(10);
   const v= bcrypt.hashSync(this.password, z);
   this.password = v

   next()
})

var sellerModel = mongoose.model("Seller", sellerSchema)

module.exports = sellerModel