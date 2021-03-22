import express from "express";


export const globalRouter = express.Router();

globalRouter.get("/",(req,res) =>{
  res.send("Hello from Home!")
});

globalRouter.get("/create",(req,res) =>{
  res.send("This is create")
});

globalRouter.get("/update",(req,res) =>{
  res.send("This is update")
});

globalRouter.get("/detail",(req,res) =>{
  res.send("This is detail")
});




