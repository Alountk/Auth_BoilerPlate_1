const User = require('./../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const { email,password } = req.body;

    try {
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({msg: 'Email already exist'});
        }
        user = req.body;
        user.password = bcryptjs.hashSync(password,process.env.SALT);
        await User.create(user)

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.SECRETKEY,{
            expiresIn: 31536000 // 1 Year
        },(error, token) => {
            if (error) throw error;
            res.json({token});
        })
    } catch (e) {
        console.log(e);
        res.status(400).send('An error ocurred');
    }
}