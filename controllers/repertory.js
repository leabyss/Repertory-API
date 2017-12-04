const mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

exports.list_all_contact = function(req, res) {
	Contact.find({}, function(err, contact) {
		if (err)
			res.send(err);
		res.json(contact);
	});
};

exports.add_a_contact = function(req, res) {
	var newContact = new Contact(req.body);
	newContact.save(function(err, contact) {
		if (err)
			res.send(err);
		res.json(contact);
	});
};

/*exports.update_a_contact = function(req, res) {
	Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, function(err, contact) {
		if (err)
			res.send(err);
		res.json(contact);
	});
};*/