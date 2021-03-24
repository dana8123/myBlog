import express from "express";
import { home, getUpload, postUpload, getEdit, postEdit, detail, deletePost} from "../controller/postController.js";
export const indexRouter = express.Router();

indexRouter.get('/', home);
indexRouter.get('/upload', getUpload);
indexRouter.post('/upload', postUpload);
indexRouter.get('/detail/:id', detail);
indexRouter.get('/:id/edit', getEdit);
indexRouter.post('/:id/edit', postEdit);
indexRouter.get('/:id/delete', deletePost)


