const uuid = require("uuid");
const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    default: "all",
  },
  date: {
    type: String,
    required: true,
    default: new Date().toDateString(),
  },
  image: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },

});

var model = mongoose.model("posts", postSchema)

module.exports = model;

// var data = {
//   posts:[
//     {
//       title: "first post",
//       author: "Author",
//       category: "comic books",
//       date: "today",
//       image: "https://i.imgur.com/HuwV4CW.jpg",
//       text: "afdfdsjhfs alkdj hflk a sdjhfjd skafhkjd sfh h kjs dhfaksd hdf"
//     },
//     {
//       title: "first post",
//       author: "Author",
//       category: "coins",
//       date: "today",
//       image: "https://i.imgur.com/HuwV4CW.jpg",
//       text: "afdfdsjhfs alkdj hflk a sdjhfjd skafhkjd sfh h kjs dhfaksd hdf"
//     },
//     {
//       title: "first post",
//       author: "Author",
//       category: "coins",
//       date: "today",
//       image: "https://i.imgur.com/HuwV4CW.jpg",
//       text: "afdfdsjhfs alkdj hflk a sdjhfjd skafhkjd sfh h kjs dhfaksd hdf"
//     },
//     {
//       title: "first post",
//       author: "Author",
//       category: "movies",
//       date: "today",
//       image: "https://i.imgur.com/HuwV4CW.jpg",
//       text: "afdfdsjhfs alkdj hflk a sdjhfjd skafhkjd sfh h kjs dhfaksd hdf"
//     },
//     {
//       title: "first post",
//       author: "Author",
//       category: "movies",
//       date: "today",
//       image: "https://i.imgur.com/HuwV4CW.jpg",
//       text: "afdfdsjhfs alkdj hflk a sdjhfjd skafhkjd sfh h kjs dhfaksd hdf"
//     },
//     {
//       title: "first post",
//       author: "Author",
//       category: "clothing",
//       date: "today",
//       image: "https://i.imgur.com/HuwV4CW.jpg",
//       text: "afdfdsjhfs alkdj hflk a sdjhfjd skafhkjd sfh h kjs dhfaksd hdf"
//     },
//
//   ]
//
// };
// module.exports = data;
