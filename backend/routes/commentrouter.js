const CommentRouter=require("express").Router();
const { addComment,fetchAll, fetchOne, getComment} =require('../controllers/commentcontroller.js');

CommentRouter.post('/addC',addComment);

CommentRouter.get('/',fetchAll);

CommentRouter.get('/:id',fetchOne);

CommentRouter.get('/comment/:bid',getComment);

module.exports = CommentRouter;