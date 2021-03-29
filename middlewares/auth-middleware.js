import jwt from "jsonwebtoken";
import Users from "../models/users";


module.exports = (err,req,res,next) =>{
  const { authorizaion } = req.headers;
  const [tokenType, tokenVale ] = authorizaion.split(' ');

  if ( tokenType !== 'Bearer' ){
    res.status(401).send({ error: '로그인 후 사용하세요!'});
  return;
  }
  
  try{
    const { userId } = jwt.verify(tokenValue, "yj-secret-key");

    Users.findById
  }
};