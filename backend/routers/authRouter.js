const express = require('express');
const userRouter = express.Router();
const { createAccount, login } = require('../controller/authController');
const { checkUser } = require('../middleware/authMiddleware');


// userRouter.use(checkUser)
userRouter
    .route('/signup')
    .post(createAccount)

userRouter
    .route('/login')
    .post(login)

module.exports = userRouter