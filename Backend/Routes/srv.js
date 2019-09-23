const express=require('express');
var{mongoconnect}=require('../Connection/connect');
var{Author} = require('../Schemas/user');
var{productschema} =require('../Schemas/products')

const router = express.Router();


router.post('/signup',async (req, res) => {
  const x=new Author(req.body);
  try
  {
let z=await x.save();
res.status(201).json({msg:"user is created"});
  }
  catch(e)
  {
    res.status(400).send(e.message);
  }

});

router.post('/signin',async(req,res)=>{

  try{
 let z= await Author.findOne({username:req.body.username,password:req.body.password});
 console.log(z);
 if(z!=null)
 res.status(200).json({msg:"success"});
 else
 res.status(401).send('username or password is not correct');
  }
  catch(e)
  {
   res.status(403).json({msg:"server error"});
  }
});

router.get('/products',async(req,res)=>{
  try{
    let z=await productschema.find({id:{$exists:true}},{_id:0,name:1,price:1,id:1});
    res.status(200).send(z);
  }
  catch(e)
  {
    res.status(400).send(e);
  }
})


router.get('/products/:id',async(req,res)=>{
  try{
    let z=await productschema.find({id:req.params.id},{_id:0});
    res.status(200).send(z);
  }
  catch(e)
  {
    res.status(400).send(e);
  }
})

router.get('/productsdelete/:id',async(req,res)=>{
  try{
  let z=await productschema.deleteOne({id:req.params.id});
  res.status(200).send(z);
  }
  catch(e)
  {
    res.status(400).send(e);
  }
})

router.post('/productsedit',async(req,res)=>{
  try{
  let z=await productschema.update({id:req.body.id},{name:req.body.name,price:req.body.price,rating:req.body.rating});
  res.status(200).send(z);
  }
  catch(e)
  {
    res.status(400).send(e);
  }
})
module.exports = router;