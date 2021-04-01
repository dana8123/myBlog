import express from "express";
import { indexRouter } from "./routes/indexRoutes.js";
import { postRouter } from "./routes/postRoutes.js";
import { globalRouter } from "./routes/globalRoutes.js";
import { authMiddlesware } from "./middlewares/auth-middleware.js";
import cookieParser from "cookie-parser";
const app = express();


app.set('view engine', 'pug');
//middle wares
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use('/public', express.static('public'));
app.use(cookieParser());
//routing
app.use('/',globalRouter)
app.use(authMiddlesware);
app.use("/",indexRouter);
app.use('/',postRouter)



export default app;