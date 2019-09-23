const mongoose=require('mongoose');
const product=new mongoose.Schema({
    id:{
        type:Number,unique:true

    },
    name:{type:String},
    price:{type:Number},
    rating:{type:Number}
})

product.index({
    id: 1,
    }, {
    unique: true,
  });

  var productschema = mongoose.model('productschema',product,"products");
  
  module.exports={
    productschema:productschema
  };