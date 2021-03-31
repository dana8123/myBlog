import User from "../models/users.js"
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
import { authMiddlesware } from "../middlewares/auth-middleware.js";

export const getJoin = async(req,res) => {
  res.render('join', { User });
}

//회원가입

export const postJoin = async(req,res,next) => {
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
  //유저 생성 코드  
    await User.create({
      userId, userName, password
    });
    res.status(201);
    next();

  }catch(err){
    res.status(400).send({
      error : '뭔가 잘못됐습니다.'
    });
  };
}


//////////////
/////로그인////
/////////////   

export const getLogin = async(req,res) => {
  res.render('login');
};

//로그인 및 토큰 발급
export const postLogin = async(req, res,next) => {
  try{
    const{ userId, password } = req.body;
    const user = await User.findOne({ userId, password });

    if ( !user ){
      res.status(401)
      .send('<script type="text/javascript">alert("존재하지않는 회원입니다");</script>');  //존재하지않는 회원이라는 안내 띄우기
      return;
    };
    //유저 로그인에 성공한 경우 토큰 발급
    const token = jwt.sign({ userId: user.userId}, 
      process.env.JWT_SECRET 
    );
    // 쿠키에 user라는 이름으로 토큰 저장
    res.cookie('user', token).redirect('/');

  } catch (err) {
      res.status(400).send({
        error: '토큰 발급 실패, 재시도해주세요'
      })
    }
  };


export const logout = (req,res) => {
  res.redirect('/');
};
////////////////
///사용자인증//////
////////////////

export const test = (req,res) => {
  res.send({user: res.locals.user});
};

