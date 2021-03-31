import express from "express";
import{ getUpload, postUpload, getEdit, postEdit, postDelete, postComment, postEditComment, deleteComment } from "../controller/postController.js";
import { authMiddlesware } from "../middlewares/auth-middleware.js";
export const postRouter = express.Router();


//upload routes
postRouter.get('/upload', authMiddlesware, getUpload);
postRouter.post('/upload', authMiddlesware, postUpload);

//edit routes
postRouter.get('/:id/edit', authMiddlesware, getEdit);
postRouter.post('/:id/edit', authMiddlesware, postEdit);

//delete routes
postRouter.post('/:id/delete', postDelete)

//comment routes(CRUD)
postRouter.post('/:id/comment', authMiddlesware ,postComment);
postRouter.post('/:id/comment/edit', authMiddlesware, postEditComment);
postRouter.post('/:id/comment/delete', authMiddlesware, deleteComment);
