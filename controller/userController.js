import User from "../models/users.js"


export const getJoin = async(req,res) => {
  res.render('join', { User });
}


export const postJoin = async(req,res) => {
  try{
    const { userName, userId, password, confirmPassword } = req.body;
  // 패스워드 동일 여부
    if( password !== confirmPassword ){
      res.status(400).send({
        error: '패스워드가 동일하지 않습니다.'
      });
      return;
    }
   const existsUser = await User.findOne({ userId });
  // 중복 id 확인 코드
    if( existsUser ){
      res.status(400).send({
        error: '이미 가입된 ID가 있습니다.'
      });
      return;
    }
    
    await User.create({
      userId, userName, password
    });
    res.status(201).redirect('/');

  }catch(err){
    res.status(400).send({
      error : '뭔가 잘못됐습니다.'
    });
  };
}


//////////////
/////로그인////
/////////////   
  export const getLogin = async(req, res) => {
    const{ userId, password } = req.body;
  };

  export const postLogin = async(req,res) => {
    res.redirect('/');
  };