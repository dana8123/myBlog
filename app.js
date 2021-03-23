import express from "express";
import { indexRouter } from "./routes/indexRoutes.js";
import connect from "./models/index.js";
const app = express();
connect();


app.set('view engine', 'pug');
//middle wares
app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static('public'));

//routing
app.use("/",indexRouter)



export default app;