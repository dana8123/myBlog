import express from "express";
import { home, upload, update} from "../controller/postController.js";
export const indexRouter = express.Router();


indexRouter.get('/', home);
indexRouter.get('/upload', upload);
indexRouter.post('/upload', upload);
indexRouter.get('/update', update);
indexRouter.post('/update', update);


