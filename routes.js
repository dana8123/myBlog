import express from "express";


export const globalRouter = express.Router();

globalRouter.get("/",(req,res) =>{
  res.send("Hello from Home!")
});

