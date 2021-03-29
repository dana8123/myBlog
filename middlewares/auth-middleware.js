import jwt from "jsonwebtoken";
import Users from "../models/users";


export const authMiddleware  = (req,res,next) =>{
  const { authorizaion } = req.headers;
  const [tokenType, tokenVale ] = authorizaion.split(' ');

  if ( tokenType !== 'Bearer' ){
    res.status(401).send({ 
      error: '로그인 후 사용하세요!'
    });
  return;
  }
  
  try{
    const { userId } = jwt.verify(tokenValue, "yj-secret-key");

    Users.findOne({ userId }).then((user) =>{
      res.locals.user = user;
      next();
    })
  } catch(error) {
    res.status(401).send({
      error : '로그인이 필요합니다.'
    });
  }
};