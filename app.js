import express from "express";
import { indexRouter } from "./routes/indexRoutes.js";
import { postRouter } from "./routes/postRoutes.js";
const app = express();


app.set('view engine', 'pug');
//middle wares
app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static('public'));

//routing
app.use("/",indexRouter)
app.use("/post",postRouter) 



export default app;