import Post from "../models/post.js";

export const home = async (req,res) => {
  try{
    const posts = await Post.find({}).sort({createAt: -1});//await빠짐
    console.log(posts);
    res.render("home",{ siteTitle: 'myBlog', posts });
  } catch(error){
    console.log(error);
    res.render("Home", { siteTitle: 'myBlog', posts:[] });
  }
}


export const upload = (req,res) => res.render("upload",{title: 'myBlog'});

export const update = (req,res) => res.send('this is update');
