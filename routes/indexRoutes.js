import express from "express";
import { detail } from "../controller/postController.js";
import { getJoin, getLogin, postJoin, postLogin, test, logout} from "../controller/userController.js";
import { authMiddlesware } from "../middlewares/auth-middleware.js";
export const indexRouter = express.Router();

//detail page routes
indexRouter.get('/detail/:id' ,detail);

//join, login routes
indexRouter.get('/login' ,getLogin);
indexRouter.post('/login', postLogin);
indexRouter.get('/join', getJoin);
indexRouter.post('/join', postJoin, postLogin);
indexRouter.get('/logout',logout);

//사용자인증
indexRouter.get('/test', authMiddlesware, test);



