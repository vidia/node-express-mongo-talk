var mongoose = require("../mongoose");

var MessageSchema = mongoose.Schema({
  message: String
});

module.exports = mongoose.model("Message", MessageSchema);
