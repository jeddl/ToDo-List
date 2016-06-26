var User = require('../model/User.json');

module.exports = function(req, res, next) {

    var exist = false;
    User.id.forEach(function(user) {
        if (req.body.username in user) {
            exist = true;
            if (req.body.password == user[req.body.username].password) {
                console.log("Login successful");
                res.json(user[req.body.username]);
                next();
            } else {
                res.json({
                    "message": "Password not found"
                });
                next();
            }
        }
    });
    if (!exist) {
        res.json({
            "message": "User not found"
        });
    }
    next();

};
