const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require("body-parser");

//setup app & its routes
const app = express();
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
//


const routes = require('./routes/index.route');
app.use(routes);

//start http server
var port = 8000;

const httpServer = http.createServer(app);
httpServer.listen(port);
console.log("Http server listening at port", port);


module.exports = { app };
