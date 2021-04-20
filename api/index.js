//dependencies,references
const http = require('http');
const axios = require('axios');
logger = require('morgan');
cors = require('cors');
express = require('express');
bodyParser = require('body-parser');
mongoose = require('mongoose');
require = ('dotenv/config')

//INSTANCES listen and push
var app = express();
var port = 8000;//port default
//dotenv.config();

app.use(bodyParser.json())//JSON /first
app.use(logger('tiny'));//morgan//knows the n point of requests and responses between the user and controller: GET / 404 139 - 1.760 ms//POST /hello 200 126 - 1.586 ms
app.use(require('./routes'));//last

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
  { useNewUrlParser: true},//for avoid the deprecationWarning at the terminal
  () => console.log('connected to DB successfully!')
);


app.listen(port, function(err){
    console.log('Listening on port: ' + port);//print outuput por runner
});