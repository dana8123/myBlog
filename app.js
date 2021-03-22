import express from "express";
import { globalRouter } from "./routes.js";
const app = express();


//middle wares
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static('public'));
app.use("/",globalRouter)
//routers



export default app;