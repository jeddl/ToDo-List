var content = require("../model/newPlaces");


module.exports = function(req, res, next) {
    res.json(content);
};
