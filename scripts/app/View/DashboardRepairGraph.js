define([
	'jquery',
	'underscore',
	'Backbone',
], function ($, _, Backbone) {
	var ShopDashboardRepairGraphView = Backbone.View.extend({
		initialize: function(){
			//En this.collection tenemos la colección de usuarios de la tienda visualizada
		},
		render: function () {
			console.log("Rendering graph");

			var dataToRender = this.collection.get( this.options.userSelection || -1 /*Todos*/ );
			if(!dataToRender)
				dataToRender = this.collection; //We want all by default inside an array.
			else
				dataToRender = [dataToRender]; // We want an array of one elements - the selected element.

			this.$el.text( JSON.stringify(dataToRender) );

			return this;
		}
	});

	return ShopDashboardRepairGraphView;
});