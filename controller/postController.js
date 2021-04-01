import Post from "../models/post.js";
import Comment from "../models/comment.js"
import { authMiddlesware } from "../middlewares/auth-middleware.js";


export const home = async (req,res) => {
  try{
    const posts = await Post.find({}).sort({createAt: -1});//await빠짐
    res.render("home",{ siteTitle: 'myBlog', posts });
  } catch(error){
    console.log(error);
    res.render("home", { siteTitle: 'myBlog', posts:[] });
  }
}


export const getUpload = (req,res) =>{ 
  const { userId } = res.locals.user;
  res.render("upload",{title: 'myBlog'});
};

export const postUpload = async(req,res) =>  {
  const { userId } = res.locals.user;
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
    const post = await Post.findById(id).populate('comments');
    console.log(post);
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

export const postEdit = async(req,res) => {
  try{ 
    const {
      params: {id},
      body: { title, content, author, pwd}
    } = req;
    
      const post = await Post.findOne({_id : id})
      console.log(post.pwd, pwd);
      if(pwd === post.pwd){   
      await Post.findOneAndUpdate({_id : id}, {title, content, author})
      res.redirect(`/detail/${id}`,({check})); //redirect는 쓰면 안됨??
      } else {
        //res.send(`<script type="text/javascript"> alert("틀림") </script>`)
        console.log('패스워드가 불일치해서 수정하기 실패!');
    }
  } catch(error){
    res.redirect('/')
  } 
}

export const postDelete = async (req,res) =>{
  const {
    params : {id},
    body: {pwd}
  } = req; 

  try{
    const post = await Post.findOne({_id : id})
    if(pwd === post.pwd){
    await Post.findOneAndDelete({ _id: id});
    console.log('삭제되었습니다.')
    } else{
      console.log('정답:',post.pwd, '내가쓴것: ',pwd)
      console.log('비밀번호 틀렸다!')
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect('/');
}

/////////////
//댓      글//
////////////

export const postComment = async (req,res) => {
  const {id} = req.params;
  const { comment, author } = req.body;
  const { userId } = res.locals.user;
  try{
    const post = await Post.findById(id);
    const newComment = await Comment.create({
      text: comment,
      author: author,
    });
    post.save();
    post.comments.push(newComment.id);
  res.redirect(`/detail/${post.id}`);
} catch(error){
    console.log(error);
    res.status(400).send('댓글기능 중 오류가 발생했습니다.')
}
};

//댓글 수정하기
//comment의 id를 가져와서 삭제하나?
//아니면 postid를 갖고와서 그곳의 코멘트를 수정하는게 낫겠다...

export const postEditComment = async(req,res) => {
  const {
    params : {id},
    body : { author, edittext, text },
  } = req;
  await Comment.findOneAndUpdate({_id:id} , { author, text:edittext });
  res.redirect(`/`);
}

//댓글 삭제하기
export const deleteComment = async (req,res) => {
  const { 
    params: {id},
  } = req;
  await Comment.findByIdAndDelete(id);
  res.redirect(`/`); //redirec post detail ID값 고민해볼 것
}
