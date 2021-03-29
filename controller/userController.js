import User from "../models/users.js"


export const getJoin = async(req,res) => {
  const { userId, password, confirmPassword } = req.body;
  //pug 구현하러 간다..
}

export const getLogin = async(req, res) => {
  const{ userId, password } = req.body;
  res.render('login');
};

export const postLogin = async(req,res) => {

  res.redirect('/');
};