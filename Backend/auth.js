const jwt = require("jsonwebtoken");
const JWT_SECRETE = ""; // ( remember )

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