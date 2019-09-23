const jwt = require('jsonwebtoken');

function createtoken(data)
{
    var token=jwt.sign(data,'shakti', {
    expiresIn: '5m',
    algorithm: 'HS256'
});

return token;
}

function verifytoken(req,res,next)
{
    var token = req.headers['x-auth'];
     console.log(token);
     if (token) {
        jwt.verify(token,'shakti', function(err, decoded) {
            if (err) {
                return res.status(401).send("either token expired or wrong token");
            }
            else{
          req.decoded = decoded;

          next();
        }
        });
    }
     else {

        return res.status(400).send("token missing");
    }
}

console.log(createtoken({_id:20}));

module.exports={
    createtoken,
    verifytoken
}