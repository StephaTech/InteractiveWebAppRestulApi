var User = require('./models/user')

//function calling the routes
exports.createUser = function(req, res) { 
    var newuser = new User(req.body);
    newuser.save(function (err, user) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(user); 
});
};


exports.getUsers = function(req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};
//CODE for read a single user
exports.getUser = function(req, res) {
  User.findOne({_id: req.params.id}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};
//CODE for find a single user
exports.updateUser = function(req, res) {
  User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};
//CODE for find a single user/req-body=HTTP request
exports.deleteUser = function(req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};