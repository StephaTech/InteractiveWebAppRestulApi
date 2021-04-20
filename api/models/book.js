var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({ 
    item: { type: String, unique: true},
    price: { type: Number},
    name: { type: String},
     
},
{ timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);//'User', userSchema);