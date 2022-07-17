const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const BlogSchema =new Schema({

    title:{
        type:String,
        required:true,
    },
 
    description:{
        type:String,
        required:true
    },

    color:{
        type:String,
    },


    
})


const Blog = mongoose.model("blog",BlogSchema)
module.exports= Blog
