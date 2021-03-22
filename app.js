import express from "express";
import { postRouter } from "./routes/postRoutes.js";
const app = express();


app.set('view engine', 'pug');
//middle wares
app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static('public'));

const handleHome = (req,res)=>{
  res.send("Hello! its home!")
}

app.get("/",handleHome);
// post/routes
app.use("/post",postRouter) 



export default app;