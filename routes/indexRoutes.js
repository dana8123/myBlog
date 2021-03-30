import express from "express";
import { home, getUpload, postUpload, getEdit, postEdit, detail, postDelete, postComment} from "../controller/postController.js";
import { getJoin, getLogin, postJoin, postLogin, test} from "../controller/userController.js";
import { authMiddlesware } from "../middlewares/auth-middleware.js";
export const indexRouter = express.Router();

indexRouter.get('/', home);

//upload routes
indexRouter.get('/upload', getUpload);
indexRouter.post('/upload', postUpload);

//detail page routes
indexRouter.get('/detail/:id', detail);

//deit routes
indexRouter.get('/:id/edit', getEdit);
indexRouter.post('/:id/edit', postEdit);

//delete routes
indexRouter.post('/:id/delete', postDelete)

//join, login routes
indexRouter.get('/login', getLogin);
indexRouter.post('/login', postLogin);
indexRouter.get('/join', getJoin);
indexRouter.post('/join', postJoin);

//comment routes(CRUD)
indexRouter.post('/:id/comment', postComment);

//사용자인증
indexRouter.get('/test', authMiddlesware, test);



