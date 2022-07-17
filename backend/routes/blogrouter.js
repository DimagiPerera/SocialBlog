const BlogRouter=require("express").Router();
const { addBlog, updateBlog, deleteBlog } =require('../controllers/blogcontroller.js');
const { fetchAll, fetchOne} =require('../controllers/blogcontroller.js');

BlogRouter.post('/addB',addBlog);

BlogRouter.put('/blogs/update/:id',updateBlog);

BlogRouter.delete('/blogs/delete/:id', deleteBlog);

BlogRouter.get('/',fetchAll);

BlogRouter.get('/:id',fetchOne);

module.exports = BlogRouter;