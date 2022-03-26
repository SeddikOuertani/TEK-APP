const express = require('express');
const commentRoute = express.Router();
// Comment model
let Comment = require('../models/Comment');

//multer for pic upload
const uploadMedia = require('../middleware/picUpload')

// Add Comment
commentRoute.route('/create').post((req, res, next) => {

  // if(req?.files[0]){
  //   newComment.media = req?.files[0]
  // }

  let newComment = req.body;
  newComment.creationDate = new Date(req.body.creationDate)
  console.log(newComment)
  Comment.create(newComment, (error, data) => {

    // if (error instanceof multer.MulterError ) {
    //   error.message += "\nmulter Error";
    //   return next(error)
    // }else

      if (error){
        return next(error)
      }
      else {
        res.json(data);
      }
  })

//Get comments by parent ID
commentRoute.route('/read/byParentId/:idParent').get((req, res, next) => {
  Comment.find({idParent : req.params.idParent}, (error, data) => {
    if(error){
      return next(error)
    }else{
      res.json(data)
    }
  })
})

})

module.exports = commentRoute;