define([
	'Backbone',
	'app/Model/User'
], function (Backbone, User) {
	var Users = Backbone.Collection.extend({
		model: User
	});

	return Users;
});