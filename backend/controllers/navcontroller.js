
const profilePage = async(req,res)=>{
  res.render('profile/profile.ejs');
}
const loginPage = async(req,res)=>{
  res.render('auth/login.ejs');
}

module.exports= {
  profilePage,
  loginPage,
};
