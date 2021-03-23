import express from "express";
import { home, getUpload, postUpload, getUpdate, postUpdate} from "../controller/postController.js";
export const indexRouter = express.Router();


indexRouter.get('/', home);
indexRouter.get('/upload', getUpload);
indexRouter.post('/upload', postUpload);
indexRouter.get('/update', getUpdate);
indexRouter.post('/update', postUpdate);


