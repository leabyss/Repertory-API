const express = require('express'),
		app = express(),
		port = process.env.PORT || 3000,
		mongoose = require('mongoose'),
		bodyParser = require('body-parser');

var Contact = require('./models/contact');

// Connect do database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/repertoryAPI')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/repertory');
routes(app);

app.listen(port);
console.log('Server listening on port :' + port);