define([
	'jquery',
	'underscore',
	'Backbone',
	'app/View/DashboardRepairGraph',
	'text!templates/shopDashboard.html'
], function ($, _, Backbone, DashboardRepairGraph, dashboardTemplate) {
	var DashboardView = Backbone.View.extend({
		el: $('#container'), //Lo conocemos
		template: _.template(dashboardTemplate),
		initialize: function(){
			/**
			 * Inicializamos todas las sub-vitas involucradas.
			 * En this.model tenemos el MODEL del dashboard, o sea, sus datos.
			 * En this.options tenemos el resto de opciones que se hayan podido pasar.
			 * En this.model.get('users') tenemos el listado de usuarios para iterar como un Backbone.Collection
			 * En this.model.get('repairsNotAssigned') tenemos las reparaciones no asignadas (tabla inferior)
			 */
			this.model.on('sync', this.render, this /*bind this to render function*/);

			this.graph1 = new DashboardRepairGraph({
				collection: this.model.get('users')
			});

			this.graph2 = new DashboardRepairGraph({
				collection: this.model.get('users')
			});
		},
		render: function(){
			var data = {
				users: this.model.get('users').toJSON(), /*Templates requires OBJECT raw data! Not model objects.*/
				repairs: this.model.get('repairsNotAssigned').toJSON() /*So we use toJSON(), BUT it is NOT an string*/
			}; //Datos a sustituir en el template

			this.$el.html( this.template(data) );

			//Render left graph.
			this.graph1.$el = this.$el.find('#reparaciones1 .content').empty();
			this.graph1.render();

			//Render right graph.
			this.graph2.$el = this.$el.find('#reparaciones2 .content').empty();
			this.graph2.render();

			return this;
		},
		loading: function() {
			//Draws loading function
			this.$el.find('.loading').html("Loading...");
			return this;
		},
		events: {
			"change #reparaciones1 .selector" : "graphSelector1",
			"change #reparaciones2 .selector" : "graphSelector2"
		},
		graphSelector1: function (e) {
			//you can access the element that was clicked with event.currentTarget
			var s = $(e.currentTarget);

			var selection = s.find(':checked').val();

			this.graph1 = new DashboardRepairGraph({
				collection: this.model.get('users'),
				userSelection: selection
			});

			this.graph1.$el = this.$el.find('#reparaciones1 .content').empty();
			this.graph1.render();
		},

		graphSelector2: function (e) {
			//you can access the element that was clicked with event.currentTarget
			var s = $(e.currentTarget);

			var selection = s.find(':checked').val();

			this.graph2 = new DashboardRepairGraph({
				collection: this.model.get('users'),
				userSelection: selection
			});

			this.graph2.$el = this.$el.find('#reparaciones2 .content').empty();
			this.graph2.render();
		}
	});

	return DashboardView;
});