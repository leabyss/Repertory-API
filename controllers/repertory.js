const mongoose = require('mongoose'),
			Contact = mongoose.model('Contact');

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
		
		Contact.find({number: req.body.number}, (err,contact) => {
			if (contact.length > 1) {
				let error = 'Number already exists'
				
				return res.send(error);
			}
			
			else {
				res.json(contact);
			}
		});
	});
};

exports.update_a_contact = function(req, res) {
	Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, { new: true }, function(err, contact) {
		if (err)
			res.send(err);
		
		Contact.find({number: req.body.number}, (err,contact) => {
			if (contact.length > 1) {
				let error = 'Number already exists'
				
				return res.send(error);
			}
			
			else {
				res.json(contact);
			}
		});
	});
};

exports.delete_a_contact = function(req, res) {
  Contact.remove({
    _id: req.params.contactId
  }, function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Contact successfully deleted' });
  });
};