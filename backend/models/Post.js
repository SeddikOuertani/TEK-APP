const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Post = new Schema({
        text: {
            type: String
        },
        idUser : {
            type : String
        },
        userName : {
            type : String
        },
        mediaUrl : {
            type: String
        },
        creationDate : {
            type : Date
        },
        userPfp:{
            type : String
        }
    },
    { collection: 'posts'}
)

module.exports = mongoose.model('Post', Post);