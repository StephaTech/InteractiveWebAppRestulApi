//dependencies
const express = require('express'),
router = express.Router();

//reference into routes from the request logic intem-controller
var itemCtrl = require('./item-controller');

router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.post('/hello', itemCtrl.postWorld);

//EXPORTS
module.exports = router;
