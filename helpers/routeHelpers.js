const joi = require('joi');

module.exports = {
	validateBody: (schema) => {
		return (req, res, next) => {
			const result = joi.validate(req.body, schema);
			if (result.error) {
				return res.send(result.error);
			}
			
			if (!req.value) {
				req.value = {};
			}
			
			req.value['body'] = result.value;
			next();
		}
	},
	
	schemas: {
		addContactSchema: joi.object().keys({
			firstName: joi.string().required(),
			lastName: joi.string().allow("").optional(),
			number: joi.string().max(10).required(),
			email: joi.string().email().allow("").optional()
		}),
		updateContactSchema: joi.object().keys({
			firstName: joi.string().allow("").optional(),
			lastName: joi.string().allow("").optional(),
			number: joi.string().max(10).allow("").optional(),
			email: joi.string().email().allow("").optional()
		})
	}
};