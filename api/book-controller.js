var Book = require('./models/book')//Book variable created / user class created

//function calling the routes
exports.createBook = function(req, res) { 
    var newbook = new Book(req.body);//newbook variable created
    newbook.save(function (err, user) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(book); //otherwise output the book schema
});
};


exports.getBooks = function(req, res) {
  Book.find({}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(books);
  }); 
};
// //CODE for read a single user
// exports.getUser = function(req, res) {
//   User.findOne({_id: req.params.id}, function (err, users) {
//     if (err) {
//       res.status(400).json(err); 
//     } 
//     res.json(users);
//   }); 
// };
// //CODE for find a single user
// exports.updateUser = function(req, res) {
//   User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, users) {
//     if (err) {
//       res.status(400).json(err); 
//     } 
//     res.json(users);
//   }); 
// };
// //CODE for find a single user/req-body=HTTP request
// exports.deleteUser = function(req, res) {
//   User.findByIdAndRemove({_id: req.params.id}, function (err, users) {
//     if (err) {
//       res.status(400).json(err); 
//     } 
//     res.json(users);
//   }); 
// };