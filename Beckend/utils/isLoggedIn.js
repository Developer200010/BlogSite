const jwt = require('jsonwebtoken');

const isLoggedIn = (req,res,next) =>{
    if(req.cookies.token === ""){
        res.status(401).json("user not found");
    }else{
        let data = jwt.verify(req.cookies.token, "ssshhhshhh");
        req.user = data;
    }
};

module.exports = isLoggedIn;