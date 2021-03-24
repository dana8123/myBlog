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


export const getUpload = (req,res) => 
  res.render("upload",{title: 'myBlog'});

export const postUpload = async(req,res) =>  {
  const {
    body: { title, author, pwd, content }
  } = req;
  const newPost = await Post.create({
    title,
    author,
    pwd,
    content
  });
  res.redirect(`detail/${newPost.id}`);
}


//게시글 id 별 detail페이지
export const detail = async (req,res,next) => {
  res.render(`detail`)
  next();
}

export const postUpdate = (req,res) => 
res.send('this is update');

export const getUpdate = (req,res) => 
res.send('this is update');

