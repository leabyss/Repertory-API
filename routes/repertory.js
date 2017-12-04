module.exports = function(app) {
	const {validateBody, schemas} = require('./../helpers/routeHelpers');
	var repertory = require('./../controllers/repertory');
	
	app.route('/repertory')
		.get(repertory.list_all_contact)
		.post(validateBody(schemas.contactSchema), repertory.add_a_contact);
	
	app.route('/repertory/:contactId')
		.put(validateBody(schemas.contactSchema), repertory.update_a_contact)
		.delete(repertory.delete_a_contact);
};