const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    blogid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'blog',
        required : true

    },
    
    comment : {
        type : String,
        required : true
    }


})

const Comment = mongoose.model("comment",CommentSchema)
module.exports = Comment