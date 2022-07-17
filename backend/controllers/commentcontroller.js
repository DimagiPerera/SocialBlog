const Comment = require('../models/Comment');


//add comment
exports.addComment = async (req, res) => {
 
    //constant variables for the attributes
    const {blogid,comment } = req.body;

    //object
    const newComment= new Comment({
      //initializing properties
      blogid,
      comment
    })
   
    //saving the object to the db 
    newComment.save().then(() => {
      res.status(200).json({ status: "New Comment Added" });
    }).catch((error) => {
      res.status(500).json({message:"Fail to Add Comment",error:error.message})
    })
  }


exports.fetchAll =async(req,res) =>{

    Comment.find().then((comments)=>{
        
        res.status(200).json(comments)
    }).catch((error)=>{
        res.status(500).json({message:"fetching failed", error:error.message});
    })
}

exports.fetchOne =async(req,res) =>{
    let commentId = req.params.id;

    await Comment.findById(commentId)
    .then( (comment) =>{
        res.status(200).json(comment)
    }).catch( (error) =>{
        res.status(500).json({message:"Fetching failed", error:error.message});
    })
}

exports.getComment=async(req,res) =>{

    const BlogID = req.params.bid;
    try{
        const comment1 = await Comment.find({
            blogid: BlogID,

        });
        res.status(200).json(comment1);
    }catch(error){
        res.status(500).json({message:"Failed to fetch comments", error:error.message});

    }
    
}

