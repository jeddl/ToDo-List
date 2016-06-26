var todoList = require('../model/todoList');
var User = require('../model/User.json');

module.exports = function(req, res, next) {

    var exist = false;
    User.id.forEach(function(user) {
        if (req.headers.userid in user) {
            exist = true;
            res.json(
                user[req.headers.userid].todos
            );
            next();
        }
    });
    if (!exist) {
        res.json({});
    }

};
