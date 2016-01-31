var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8000;

app.get("/", function (req, res) {
      res.redirect("/index.html");
});

app.get("/eval", function (req, res) {
    console.log(req.query);
    var userInput = decodeURIComponent(req.query.code);
    var result  = eval(userInput);
    // calculate res here
    //
     res.send(result.toString()); // send response body
});

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);