import express from "express";
export const indexRouter = express.Router();

//Get HomePage
const home = (req,res) => res.render("home",{title: 'myBlog'});

indexRouter.get('/', home);


