// Filename: router.js
define([
	'Backbone',
	'app/Model/Interface/Dashboard',
	'app/View/ShopDashboard'
], function(Backbone, Dashboard, ShopDashboard){
	var AppRouter = Backbone.Router.extend({
		routes: {
			'!/:shopName/Dashboard/': 'showDashboard',
			/*'!/:shopName/Clientes/': 'showClients',
			'!/:shopName/Presupuestos/': 'showBudgets',*/
			'*other': 'otherRoute',
		},
	   
		otherRoute: function(other){
			//Render 404 or redirect
			console.log("404 direction");
		},
		showDashboard: function(shopName){
			//Render Dashboard section of shopName
			console.log('shopName: '+shopName+' - Dashboard');

			//Modelo de la vista
			var dashboard = new Dashboard({
				shopName: shopName
			});

			//Vista
			new ShopDashboard({
				model: dashboard
			}).loading();

			dashboard.fetch();
		},

		showClients: function(shopName){
			//Render Clients section.
		},

		'showBudgets': function(shopName){
			//Render Bundgest section.
		}
	});

	return {
		initialize: function(){
			var app_router = new AppRouter();
			Backbone.history.start();
		}
	};
});