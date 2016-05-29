var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	username: {type: String, required: true, index: {unique:true}},
	password: {type: String, required: false, select:false}
});

userSchema.pre("save",function(next){
	var user = this;

	if(!user.isModified("password")) return next();

	bcrypt.hash(user.password,null,null,function(err,hash){
		if(err) return next(err);
		user.password = hash;
		next();
	});
});

userSchema.methods.comparePassword = function(password){
	var user = this;

	return bcrypt.compareSync(password, user.password);
}

module.exports = mongoose.model("user",userSchema);