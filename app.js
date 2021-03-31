import express from "express";
import { indexRouter } from "./routes/indexRoutes.js";
import { authMiddlesware } from "./middlewares/auth-middleware.js";
import cookieParser from "cookie-parser";
const app = express();


app.set('view engine', 'pug');
//middle wares
app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cookieParser());
//routing
app.use(authMiddlesware);
app.use("/",indexRouter)



export default app;