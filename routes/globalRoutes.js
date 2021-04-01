import express from "express";
import { home, detail} from "../controller/postController.js";
export const globalRouter = express.Router();


globalRouter.get('/',home);


//detail page routes
globalRouter.get('/detail/:id', detail);
