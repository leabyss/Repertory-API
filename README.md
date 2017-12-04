## Repertory API

Create an API with Nodejs for a simple repertory application made with Angular.

### How to install it :

* Clone this repository.
* Inside the downloaded folder, run ```npm install``` to install all dependencies.
* Then run ```npm run start-dev``` to start the server with Nodemon.
* Enjoy !

### Get all contacts :

	GET method on '/repertory'

### Add a contact :

	POST method on '/repertory'
	
		data to send :  
			{
				"firstName" : "firstNameOfContact" (required),
				"lastName" : "lastNameOfContact",
				"number" : "numberOfContact" (String, max length = 10, required),
				"email" : "emailOfContact"
			}

### Update a contact :

	PUT method on '/repertory/:contactId'
	
		data to send :  
			{
				"firstName" : "firstNameOfContact" (required),
				"lastName" : "lastNameOfContact",
				"number" : "numberOfContact" (String, max length = 10, required),
				"email" : "emailOfContact"
			}

### Delete a contact :

	DELETE method on '/repertory/:contactId'