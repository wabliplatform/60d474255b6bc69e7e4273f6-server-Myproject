
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
Underscoreid:String , 


ptitle:String , 


pprice:String 



})

module.exports = {
  Product : mongoose.model('product', productSchema),
}

