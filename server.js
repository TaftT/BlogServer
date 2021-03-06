const express = require("express");
const cors = require("cors");
const uuid = require("uuid");
const mongoose = require("mongoose");

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

var postSchema=require("./schema.js");


server.get("/posts", function(req, res){
  postSchema.find().then(function(posts){
    var response = {
      posts: posts
    };
    res.json(response);
  }).catch(function(error){
    var response ={
      msg: error.message
    };
    res.status(400);
    res.json(response);

  })
  // var response = {
  //   posts: data.posts
  // };
  // res.json(response);
});

server.post("/posts", function(req, res){
  postSchema.create({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    image: req.body.image,
    text: req.body.text
  }).then(function(new_post){
    res.status(201);
    res.json(new_post);
  }).catch(function(error){
    var response ={
      msg: error.message
    };
    res.status(400);
    res.json(response);

  })
});

  server.delete("/posts/:id", function(req , res){
    postSchema.findByIdAndDelete(req.params.id).then(function(){
      res.status(204);
      res.send();
    }).catch(function(error){
      var response ={
        msg: error.message
      };
      res.status(400);
      res.json(response);

    })

  });

  server.put("/posts/:id", function(req, res){
    postSchema.findById(req.params.id).then(function(item){
      if(item == null){
        res.status(404);
        res.json({
          msg: `there is no song with id of ${req.params.id}`
        });
      } else{
        if (req.body.title != undefined){
          item.title = req.body.title;
        }
        if (req.body.author != undefined){
          item.author = req.body.author;
        }
        if (req.body.image != undefined){
          item.image = req.body.image;
        }
        if (req.body.category != undefined){
          item.category = req.body.category;
        }
        if (req.body.text != undefined){
          item.text = req.body.text;
        }
        item.save().then(function(){
          res.status(200);
          res.json({
            item: item
          });
        })
      }
    }).catch(function(error){
      res.status(400).json({msg : error.message});
    });
  });


  // var newPost = {
  //
  //     title: req.body.title,
  //     author: req.body.author,
  //     category: req.body.category,
  //     date: req.body.date,
  //     image: req.body.image,
  //     text: req.body.text
  //
  // };
  // data.posts.unshift(newPost); //adding to a list in data.js
  // res.status(201);
  // res.send();




mongoose.connect("mongodb+srv://pocolocomoco:mocolocopoco@cluster0-ztwj9.mongodb.net/blogs?retryWrites=true&w=majority", {
  useNewUrlParser: true
}).then(function(){
  server.listen(port, function(){
    console.log(`Listening on ${port}` );
  });
});
