const express = require("express");
const cors = require("cors");
const uuid = require("uuid");

var server = express();
var port = process.env.PORT || 3000;

server.use(cors());
server.use( express.urlencoded({ extend: false}));
server.use(express.json());
server.use(express.json());
server.use(function(req , res, next) {
  console.log(`New request: ${req.method} ${req.path} on ${ new Date()}`);
  next();
});

var data=require("./data.js");
console.log(data)

server.get("/posts", function(req, res){
  var response = {
    posts: data.posts
  };
  res.json(response);
});

server.post("/posts", function(req, res){
  var newPost = {

      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      date: req.body.date,
      image: req.body.image,
      text: req.body.text

  };
  data.posts.unshift(newPost); //adding to a list in data.js
  res.status(201);
  res.send();
});



server.listen(port, function(){
  		console.log(`Listening on ${port}` )
});
