const userModel = require('../models/authModel')
const jwt = require('jsonwebtoken')
const JWT_KEY = "dafhydedbfefshfbh"

const handleErrors = (err) => {
    let errors = { email: "", password: "" };

    console.log(err);
    if (err.message === "incorrect email") {
        errors.email = "That email is not registered";
    }

    if (err.message === "incorrect password") {
        errors.password = "That password is incorrect";
    }

    if (err.code === 11000) {
        errors.email = "Email is already registered";
        return errors;
    }

    if (err.message.includes("Users validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

async function createAccount(req, res) {
    try {
        let dataobj = req.body;
        let user = await userModel.create(dataobj);
        let uid = user['_id'];
        let token = jwt.sign({ payload: uid }, JWT_KEY);
        res.cookie('jwt', token, {
            httpOnly: true,
            withCredentials: true
        });
        res.status(201).json({
            title: 'Account created.',
            description:"Your Account is created",
            status: "success",
            user: user._id
        });
    } catch (error) {
        console.log(error);
        const errors = handleErrors(error);
        res.json({ 
            errors, 
            created: false, });
    }
}


async function login(req, res) {
    try {
        let data = req.body;
        const user = await userModel.login(data.email, data.password);
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: false });
        res.status(200).json({ user: user._id, status: true });
    } catch (err) {
        console.log(error);
        const errors = handleErrors(error);
        res.json({ errors, created: false });
    }
}

module.exports = { createAccount, login }