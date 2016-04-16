'use strict';

var path = process.cwd();
var RequestHeaderApi = require(path + '/app/controllers/requestHeaderApi.server.js');

module.exports = function (app) {

	var requestHeaderApi = new RequestHeaderApi();

	app.route('/')
		.get(requestHeaderApi.getJson);

};
