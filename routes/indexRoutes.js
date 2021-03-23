import express from "express";
export const indexRouter = express.Router();

//Get HomePage
const home = (req,res) => res.render("home",{title: 'myBlog'});
const upload = (req,res) => res.render("upload",{title: 'myBlog'});
const update = (req,res) => res.render("update",{title: 'myBlog'});

indexRouter.get('/', home);
indexRouter.post('/upload', upload);
indexRouter.post('/update', update);



