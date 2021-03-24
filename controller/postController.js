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
  const {
    params: {id}
  } = req;
  try{
    const post = await Post.findById(id);
    res.render(`detail`, {post})    
  } catch(error){
    console.log(error)
  }
  next();
}


//수정하기
export const getEdit = async (req,res) => {
  const{
    params: {id}
  } = req;
  try{
    const post = await Post.findById(id);
    res.render('edit',{ post });
  } catch(error){
    res.redirect('/');
  }
}

export const postEdit = (req,res) => {
  const {
    params: {id},
    body: { title, content, author, createAt, pwd}
  } = req;
  try{
    Post.findByIdAndUpdate({_id : id}, {title, content})
  } catch(error){
    res.redirect('/')
  }
}




