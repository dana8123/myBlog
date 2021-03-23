import Post from "../models/post";

export const home = (req,res) => {
  try{
    const posts = await Post.find({}).sort({createAt});
    console.log(posts);
    res.render("home",{ pateTitle: 'myBlog', posts });
  } catch(error){
    console.log(error);
    res.render("Home", { pateTitle: 'myBlog', posts:[] });
  }
}


export const upload = (req,res) => res.render("upload",{title: 'myBlog'});

export const update = (req,res) => res.send('this is update');
