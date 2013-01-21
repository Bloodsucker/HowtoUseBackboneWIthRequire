define([
	'Backbone',
	'app/Model/Repair',
	'app/Collection/Repairs',
	'relationalModel'
], function (Backbone, Repair, Repairs) {
	var User = Backbone.RelationalModel.extend({
		relations: [
			{
				type: Backbone.HasMany,
				key: 'repairs',
				relatedModel: Repair,
				collectionType: Repairs
			}
		]
	});

	return User;
});