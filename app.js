import express from "express";
import { indexRouter } from "./routes/indexRoutes.js";
const app = express();


app.set('view engine', 'pug');
//middle wares
app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static('public'));

//routing
app.use("/",indexRouter)



export default app;