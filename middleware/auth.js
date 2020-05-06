const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req,res,next) => {
    const token = requ.header('x-auth-token');
    if (!token){return res.status(401).json({ msg: 'Unauthorized' })}
    try {
        const signature = jwt.verify(token, process.env.SECRETKEY);
        req.email = signature.email;
        req.username = signature.email;
        next();
    } catch (e) {
        res.status(401).json({ msg: 'No valid Token' })
    }
}