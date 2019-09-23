const mongoconnect=require('mongoose');
mongoconnect.Promise = global.Promise;
mongoconnect.set('useCreateIndex', true)
mongoconnect.connect('mongodb://localhost:27017/todoapp',{ useNewUrlParser: true ,useUnifiedTopology: true} );
module.exports={
    mongoconnect:mongoconnect
  };
