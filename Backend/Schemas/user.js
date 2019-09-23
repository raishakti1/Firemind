const mongoose=require('mongoose');


const profile=new mongoose.Schema({
    firstname:{type:String,required:[true,"firstname is required"]},
    lastname:{type:String,required:[true,"lastname is required"]},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:[true,"password is required"],validate: {
      validator: function(v) {
        return /[*@!#%&()^~{}]+/.test(v);
      },
      message: props => 'please include special character'
    },minlength:[6,"length should be minimum 6"],
    maxlength:[10,"length should not be more then 10"]
  },
    DOB:{type:String,required:[true,"Date of birth is required"]},
    city:{type:String,required:[true,"City is required"]},
    gender:{type:String,required:[true,"gender is required"]}
});
  
profile.index({
  username: 1,
  }, {
  unique: true,
});
  
  var Author = mongoose.model('Author',profile,"login2");
  
  module.exports={
    Author:Author
  };