const Blog = require('../models/Blog');


//add blog
exports.addBlog = async (req, res) => {
 
    //constant variables for the attributes
    const {title, description, color } = req.body;

    //object
    const newBlog= new Blog({
      //initializing properties
      title, 
      description, 
      color
    })
   
    //saving the object to the db 
    newBlog.save().then(() => {
      res.status(200).json({ status: "New Post Added" });
    }).catch((error) => {
      res.status(500).json({message:"Fail to Add Post",error:error.message})
    })
  }



//blog update
exports.updateBlog = async(req,res) => {

    let blogID = req.params.id;
    const { title, description, color } = req.body;

    const updateBlog = {title, description,color } 
    
    try{
        //find blog by ID  
         await Blog.findByIdAndUpdate(blogID ,this.updateBlog);

        res.status(200).json({message:"post updated"})
    }catch(error){
        res.status(500).json({message:"Error with updating data",error:error.message});
    }

}

//blog delete
exports.deleteBlog = async(req,res) => {
    
    let blogId = req.params.id;
    
    try{
        await Blog.findByIdAndDelete(blogId);

        res.status(200).json({message:"delete successful"});
    }catch(error){
        res.status(500).json({message: "delete failed",error:error.message});
    }
}

exports.fetchAll =async(req,res) =>{

    Blog.find().then((blogs)=>{
        
        res.status(200).json(blogs)
    }).catch((error)=>{
        res.status(500).json({message:"fetching failed", error:error.message});
    })
}

exports.fetchOne =async(req,res) =>{
    let blogId = req.params.id;

    await Blog.findById(blogId)
    .then( (blog) =>{
        res.status(200).json(blog)
    }).catch( (error) =>{
        res.status(500).json({message:"Fetching failed", error:error.message});
    })
}

