var express = require('express');
var router = express.Router();
var todoCtrl = require('../controller/todo');
var loginCtrl = require('../controller/login');

// Get authentication
router.post('/login', loginCtrl);

// router.get('/getTodos', requireAuthentication, todoCtrl);
router.get('/todos', todoCtrl);


module.exports = router;
