const userModel = require("../models/authModel");
const jwt = require("jsonwebtoken");

function checkUser(req, res, next) {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(
            token,
            "dafhydedbfefshfbh",
            async (err, decodedToken) => {
                if (err) {
                    res.json({ status: false });
                    next();
                } else {
                    const user = await userModel.findById(decodedToken.id);
                    if (user) res.json({ status: true, user: user.email });
                    else res.json({ status: false });
                    next();
                }
            }
        );
    } else {
        res.json({ status: false });
        next();
    }
};

module.exports = { checkUser }