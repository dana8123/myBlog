import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

export const authMiddlesware = (req,res,next) => {
  //인증 완료
  try{
    //요청 헤더에 저장된 토큰과 비밀키를 사용하여 토큰 변환
    req.decoded = jwt.verify(req.cookies.user, process.env.JWT_SECRET);
    return next();
  } catch(error){
    if (error.name === 'TokenExpiredError') {
      return res.status(419).json({
        error : '토큰이 만료되었습니다.'
      });
    }
    //이외에 토큰의 비밀키가 불일치
    return res.status(401).json({
      error: '유효하지 않은 토큰입니다.'
    });
  }
}
  

  