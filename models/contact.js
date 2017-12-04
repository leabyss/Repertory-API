const mongoose = require('mongoose'),
			Schema = mongoose.Schema;

var ContactSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String
	},
	number: {
		type: String,
		required: true
	},
	email: {
		type: String
	}
});

module.exports = mongoose.model('Contact', ContactSchema);