const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyLogin = (req, res, next) =>{
    console.log(req.headers)
    if(!req.headers.authorization){
        return res.status(401).json({message:"unauthorized"})
    }
    let token = req.headers.authorization.split(' ')[1]
    const obj = jwt.verify(token, process.env.secret_key);
    if(!obj){
        return res.status(404).json({message:"user not found"})
    }
    req.body.obj = obj
    next()
}

module.exports = verifyLogin