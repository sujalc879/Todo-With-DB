const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();
const JWT_SECRETE = process.env.JWT_SECRETE;

async function auth(req, res, next) {
    const token = req.headers.token;

    try {
        const data = jwt.verify(token, JWT_SECRETE);
    
        req.userId = data.userId;
    
        next()
        
    } catch (error) {
        res.status(403).json({ Message : "invalid Token"});
    }
}

module.exports = {
    auth
}