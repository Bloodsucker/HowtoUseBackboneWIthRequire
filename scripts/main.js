require.config({
	paths: {
		underscore: 'libs/underscore-min',
		Backbone: 'libs/backbone-min',
		jquery: 'libs/jquery',
		
		text: 'libs/rjsPlugins/text',
		
		relationalModel: 'libs/BackbonePlugins/backbone-relational',
		
		templates: '../templates',
	},
	
	shim: {
		'jquery' : {
			exports: "$"
		},
		'underscore' : {
			exports: "_"
		},
		'Backbone' : {
			deps: ['underscore', 'jquery'],
			exports: "Backbone"
		},
		'relationalModel' : ['Backbone']
	}
});

require([
	'router'
], function(router){
	router.initialize();
});
