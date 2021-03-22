import express from "express";
const app = express();


//middle wares
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static('public'));

//routers
const handleHome = (req,res)=>{
  res.send("Hello from home")
}

app.get("/", handleHome);


export default app;