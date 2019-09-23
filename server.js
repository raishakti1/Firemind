const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// Get our API routes
const api = require('./Backend/Routes/srv');
const app = express();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,contentType,Content-Type, Accept, Authorization,x-auth");
    next();
    });
// app.use(express.static(path.join(__dirname, 'dist/front')));
// Set our api routes
app.use('/api', api);
// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/front/index.html'));
// });

app.listen(3000);
 console.log('app is running');