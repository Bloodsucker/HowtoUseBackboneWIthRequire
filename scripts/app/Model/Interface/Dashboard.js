define([
	'Backbone',
	'app/Model/User',
	'app/Collection/Users',
	'app/Model/Repair',
	'app/Collection/Repairs',

	//Es un Backbone.Model mejorado con relaciones entre otros modelos.
	'relationalModel'
], function (Backbone, User, Users, Repair, Repairs) {
	var DashboardModel = Backbone.RelationalModel.extend({
		url: function () {
			/**
			 * Desde esta url personalizada obtendremos los datos
			 * en formato JSON y serán parseados automágicamente a
			 * los modelos relacionados con el Dashboard de
			 * la tienda correspondiente.
			 */
			var url = 'api/shopDashboard.php?shopName=' + this.get('shopName');
			return url;
		},

		//https://github.com/PaulUithol/Backbone-relational
		relations: [
			{
				//Con esta relación obtenemos los usuarios
				//que a su vez tienen las reparaciones asignadas
				type: Backbone.HasMany,
				key: 'users',
				relatedModel: User,
				collectionType: Users
			},
			{
				//Obtenemos las reparaciones no asignadas
				type: Backbone.HasMany,
				key: 'repairsNotAssigned',
				relatedModel: Repair,
				collectionType: Repairs
			}
		]
	});

	return DashboardModel;
});