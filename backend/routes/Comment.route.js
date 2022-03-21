const express = require('express');
const commentRoute = express.Router();
// Comment model
let Comment = require('../models/Comment');

// Add Comment
commentRoute.route('/create').post((req, res, next) => {

  Comment.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});

// Get All Comments
commentRoute.route('/').get((req, res, next) => {
  Comment.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Comment by userId
commentRoute.route('/read/:userId').get((req, res, next) => {
  Comment.findById(req.params.userId, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Comment
commentRoute.route('/update/:id').put((req, res, next) => {
  Comment.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Change Auth State
commentRoute.route('/changeAuthState/:id').put((req, res, next)=>{
  Comment.findByIdAndUpdate(req.params.id, {
    $set : {authenticated : true}
  },{new : true}, (error, data)=>{
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Comment
commentRoute.route('/delete/:id').delete((req, res, next) => {
  Comment.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = commentRoute;