const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Comment = new Schema({
   
    userId : {
        type : String
    },

    postId : {
       type : String
    },

},
{
   collection: 'comments'
})
module.exports = mongoose.model('Comment', Comment);