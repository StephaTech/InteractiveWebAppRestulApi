//dependencies
const express = require('express'),
router = express.Router();

//reference into routes from the request logic intem-controller
//var itemCtrl = require('./item-controller');
userCtrl = require('./user-controller');

router.post('/users', userCtrl.createUser);//CREATE USER
router.get('/users', userCtrl.getUsers);//READ all
router.get('/users/:id', userCtrl.getUser);//FIND USER BY id
router.put('/users/:id', userCtrl.updateUser);//UPDATES USER BY id
router.delete('/users/:id', userCtrl.deleteUser);//DELETE USER BY id


//EXPORTS
module.exports = router;
