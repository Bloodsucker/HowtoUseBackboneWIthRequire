Howto entender esto
===================
Primera ejecución:

```html
<script type="text/javascript" data-main="scripts/main" src="scripts/require.js"></script>
```

El fichero en scripts/main será el primero en cargar y será el desencadenante de todo.

El fichero

    scripts/View/ShopDashboard.js

define la página Dashboard de una tienda en concreto (los eventos javascript deberán ir aquí). Los datos de la página se cargar a través de un modelo de interfaz:

    scripts/Model/Interface/Dashboard.js

Dicho modelo necesita el identificador de la tienda: el nombre de la misma. Dicho modelo contiene las relaciones con los datos que se van a mostrar.

En el dashboard se muestran usuarios:

    scripts/Model/User.js
    scripts/Collection/Users.js

Para que los datos del modelo pueda visualizarse hay que relacionar un modelo de interfaz con la vista correspondiente. Dicha relación podemos establecerla en el evento de acceso a la sección (router.js):

```javascript
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
}
```

Así mismo en el renderizado del Dashboard se carga una vista independiente, una subsección:

    scripts/View/DashboardRepairGraph.js