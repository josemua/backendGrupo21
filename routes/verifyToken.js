const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token;
    if (authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
            if(err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    } else{
        return res.status(401).json("No estas autenticado");
    }
};

const verifyTokenAndAuthorization = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else{
            res.status(403).json("Parece que no puedes hacer eso... ¯\_(ツ)_/¯ ");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next();
        } else{
            res.status(403).json("Necesitas privilegios de Administrador para hacer eso... ¯\_(ツ)_/¯ ");
        }
    });
};


module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin};