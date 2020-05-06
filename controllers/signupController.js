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
        const salt = bcryptjs.genSalt(10);
        user.password = bcryptjs.hash(password,salt);
        const newUser = await User.collection.insertOne({...user,created_at:Date.now(),updated_at:Date.now()})
        const {_id , username } = newUser.ops[0]
        //console.log(newUser);
        const payload = {
            user: {
                id: _id,
                username: username,
                email : email
            }
        }
        console.log(payload);

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