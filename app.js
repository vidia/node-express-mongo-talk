var express = require('express');
var bodyParser = require('body-parser');

var Message = require("./models/message");

var app = express();

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("Hello world!");
});

app.post("/message", function(req, res){

  var message = new Message(req.body);
  message.save(function(err) {
    if(err) {
      console.log("Saving message failed");
      return;
    }
    console.log("Message saved!");
  });

});

app.get("/message", function(req, res) {
  Message.find({}, function(err, messages) {
    if(err) {
      res.send("Error");
      return;
    }
    res.json(messages);
  });
});

app.listen(3000);
