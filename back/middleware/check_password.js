const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
       return res.status(400).json({ message: 'Le MDP doit faire 8 caractère au moins, avec une maj, une min et un chiffre au moins.' });
    } else {
        next();
    }
};