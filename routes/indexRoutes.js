import express from "express";
import { home, detail} from "../controller/postController.js";
import { getJoin, getLogin, postJoin, postLogin, test} from "../controller/userController.js";
import { authMiddlesware } from "../middlewares/auth-middleware.js";
export const indexRouter = express.Router();

indexRouter.get('/', home);


//detail page routes
indexRouter.get('/detail/:id', detail);


//join, login routes
indexRouter.get('/login' ,getLogin);
indexRouter.post('/login', postLogin);
indexRouter.get('/join', getJoin);
indexRouter.post('/join', postJoin, postLogin);

//사용자인증
indexRouter.get('/test', authMiddlesware, test);



