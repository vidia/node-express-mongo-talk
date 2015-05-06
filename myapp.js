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
  message.save(function(err){
    if(err) {
      res.send("Error" + err);
    } else {
      res.send(message);
    }
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


app.put("/message/:id", function(req, res) {

  Message.findOne({ _id: req.params.id }, function(err, message) {
    if(err) {
      res.send(err);
    } else {

      

    }
  });

});


app.listen(3000);
