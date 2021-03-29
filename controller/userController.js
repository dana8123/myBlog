import User from "../models/users.js"
import jwt from "jsonwebtoken";
import { Router } from "express";
//import { authMiddleware } from "../middlewares/auth-middleware.js";

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
  //유저 생성 코드  
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

export const getLogin = async(req,res) => {
  res.render('login');
};
export const postLogin = async(req, res) => {
  try{
    const{ userId, password } = req.body;
    const user = await User.findOne({ userId, password });

    if ( !user ){
      res.status(401).send({
        error : '존재하지 않는 회원입니다.'
      });
      return;
    };
    //내 시크릿키..올라가면 안되는거아닌가....?
    const token = jwt.sign({ userId: user.userId}, "yj-secret-key");
    res.send({
      token,
    });
  }catch (err) {
      res.status(400).send({
        error: '재시도해주세요'
      })
    }
  };

////////////////
///사용자인증//////
////////////////
// export const getAuth = authMiddleware, async(req,res)=>{
//   const { user } = res.locals;
//   res.send({
//     user:{
//       userId: user.userId,
//       userName : user.userName
//     }
//   });
// });



//TODO: 사용자 인증 부분 코드 작성 필요