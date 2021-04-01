import express from "express";
import { getJoin, getLogin, postJoin, postLogin, test} from "../controller/userController.js";
import { authMiddlesware } from "../middlewares/auth-middleware.js";
export const indexRouter = express.Router();


//join, login routes
indexRouter.get('/login' ,getLogin);
indexRouter.post('/login', postLogin);
indexRouter.get('/join', getJoin);
indexRouter.post('/join', postJoin, postLogin);

//사용자인증
indexRouter.get('/test', authMiddlesware, test);



