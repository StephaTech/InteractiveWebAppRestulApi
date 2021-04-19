//dependencies,references
const http = require('http');
const axios = require('axios');
logger = require('morgan');
cors = require('cors');
express = require('express');
bodyParser = require('body-parser');
mongoose = require('mongoose');

//INSTANCES listen and push
var app = express();
var port = 8000;//port default
//dotenv.config();

app.use(bodyParser.json())//JSON /first
app.use(logger('tiny'));//morgan//knows the n point of requests and responses between the user and controller: GET / 404 139 - 1.760 ms//POST /hello 200 126 - 1.586 ms
app.use(require('./routes'));//last

// const dbURI = "mongodb://localhost/test";//connection 
// //cosnt dbURI = process.env.DB_URL;

// mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
//     .then((result) => console.log('MongoDB is successfully connected'))
//     .catch((err) => console.log(err));



app.listen(port, function(err){
    console.log('Listening on port: ' + port);//print outuput por runner
});