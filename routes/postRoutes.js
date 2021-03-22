import express from "express";


export const postRouter = express.Router();

postRouter.get("/",(req,res) =>{
  res.send("Hello from Home!")
});

postRouter.get("/create",(req,res) =>{
  res.send("This is create")
});

postRouter.get("/update",(req,res) =>{
  res.send("This is update")
});

postRouter.get("/detail",(req,res) =>{
  res.send("This is detail")
});




