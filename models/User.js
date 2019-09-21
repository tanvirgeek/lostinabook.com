const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
})

module.exports = User = mongoose.model('User', userSchema);