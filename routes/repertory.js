module.exports = function(app) {
	var repertory = require('./../controllers/repertory');
	
	app.route('/repertory')
		.get(repertory.list_all_contact)
		.post(repertory.add_a_contact);
	
	/*app.route('/repertory/:contactId')
		.put(repertory.update_a_contact)
		.delete(repertory.delete_a_contact);*/
};