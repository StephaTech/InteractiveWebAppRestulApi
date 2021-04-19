//dependencies
const express = require('express'),
router = express.Router();

//ROUTE
router.get('/hello/:foo/:bar', (req, res) => {//type  on the browse exactly what you wrote here
    res.json({message: "Hello yahh", data: [
        req.params.foo,
        req.params.bar
    ]});
});

//post using postman//is made to send some data
router.post('/hello', (req, res) => {
    res.json({result: 'Post was sent',data: req.body});
});

//EXPORTS
module.exports = router;
