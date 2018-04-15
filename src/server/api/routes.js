var express = require('express');
var router = express.Router();
var todoCtrl = require('../controller/todo');

router.get('/todos', todoCtrl);


module.exports = router;
