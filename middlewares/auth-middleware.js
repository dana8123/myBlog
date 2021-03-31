import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
import  User from "../models/users.js";

export const authMiddlesware = (req,res,next) => {

  //인증 완료
  try{
    //요청 쿠키에 저장된 토큰과 비밀키를 사용하여 토큰 변환
    //중괄호를 사용하면 원하는 데이터만 뽑아올 수 있음..! 그래서 쓰는구나..
    const { userId } = jwt.verify(req.cookies.user, process.env.JWT_SECRET);
    User.findOne({userId}).then((user) => {
      res.locals.user = user || null;
      console.log(user);
      next();
    })
  } catch(error){
    if (error.name === 'TokenExpiredError') {
      return res.status(419).json({
        error : '토큰이 만료되었습니다.'
      });
    }
    //이외에 토큰의 비밀키가 불일치
    next();
  }
}
  

  