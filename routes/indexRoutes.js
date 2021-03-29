import express from "express";
import { home, getUpload, postUpload, getEdit, postEdit, detail, postDelete} from "../controller/postController.js";
import { getLogin, postLogin} from "../controller/userController.js";
export const indexRouter = express.Router();

indexRouter.get('/', home);
indexRouter.get('/upload', getUpload);
indexRouter.post('/upload', postUpload);
indexRouter.get('/detail/:id', detail);
indexRouter.get('/:id/edit', getEdit);
indexRouter.post('/:id/edit', postEdit);
indexRouter.post('/:id/delete', postDelete)
indexRouter.get('/login', getLogin);
indexRouter.post('/login', postLogin);




