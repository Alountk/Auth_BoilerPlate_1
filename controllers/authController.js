const User = require('./../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


exports.login = async (req,res) => {
    console.log('estoy  en login');
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros: errors.array()})
    }

    const {email, password} =req.body;

    try {
        let user = await User.findOne({email});
        if (!user) return res.status(400).json({msg: 'Email or Password is not valid!'});

        const checkPassword = bcryptjs.compare(password, user.password);
        if (!checkPassword) return res.status(400).json({msg: 'Email or Password is not valid!'});

        console.log(user);

        const payload = { user: {id: _id, username, email} }

    } catch (e) {
        console.log(e);        
    }

}