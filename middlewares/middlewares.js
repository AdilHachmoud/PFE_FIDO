const User = require("../models/user");

const guest = (req, res, next) => {

  if (!req.session?.auth) {
    return next();
  }
  return res.redirect('/profile')
}

const checkUser = (req, res, next) => {
  if (req.session.user) {
    next();
    return;
  }
<<<<<<< HEAD
  console.log("user is not present in the session");
  res.status(400).json({error : "user is not present in the session"})
  return ;

}
const insertUsernameIntoSession = (req,res,next)=>{
  
   
  if(!req.body.username || !/[a-zA-Z0-9-_]+/.test(req.body.username))
  {
    console.log("must provide a valid username , try avoiding special caracters");
    res.status(400).json({error : "must provide a valid username , try avoiding special caracters"})
=======
  res.status(400).json({ error: "user is not present in the session" })
  return;

}
const insertUsernameIntoSession = (req, res, next) => {


  if (!req.body.username || !/[a-zA-Z0-9-_]+/.test(req.body.username)) {
    res.status(400).json({ error: "must provide a valid username , try avoiding special caracters" })
>>>>>>> 80cfdb26d6535fc87c1d6747f5f6a717d62201fe
    return;
  }
  const username = req.body.username

  req.session.user = { username: username }
  next()
  return;
}

<<<<<<< HEAD
const firstTimeRegistring = async (req,res,next) =>{
    
    const username = req.body.username
    const user = await User.findOne({username : username})
    if (user?.credentials.length >0) {
      console.log("u can't register an existing account");
      return res.status(400).json({error : "u can't register an existing account"})
    }
    next()
    return ;
=======
const firstTimeRegistring = async (req, res, next) => {

  const username = req.body.username
  const user = await User.findOne({ username: username })
  if (user?.credentials.length > 0) {
    return res.status(400).json({ error: "u can't register an existing account" })
>>>>>>> 80cfdb26d6535fc87c1d6747f5f6a717d62201fe
  }
  next()
  return;
}

const auth = (req, res, next) => {
  if (req.session?.auth) {
    return next()
  }
  return res.redirect('/')
}



module.exports = { insertUsernameIntoSession, checkUser, firstTimeRegistring, auth, guest }
