const mongoose = require("mongoose") ;

mongoose.connect("url") ;

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

const accountSchema = new mongoose.Schema({
    userId : String , 
    balance : String 
})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account' , accountSchema) ;

module.exports = {
	User ,
    Account
};