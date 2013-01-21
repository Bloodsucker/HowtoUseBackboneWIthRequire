define([
	'Backbone',
	'app/Model/Repair'
], function (Backbone, Repair) {
	var Repairs = Backbone.Collection.extend({
		model: Repair
	});

	return Repairs;
});