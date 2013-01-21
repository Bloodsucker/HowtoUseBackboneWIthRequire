Howto entender esto
===================

Para ejecutar el ejemplo se necesita PHP debido a la API ficticia que se ha creado. Dicho servidor PHP tiene un tiempo de retardo para simular tardanza y que se vea por qué partes se están cargando.

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

	//Modelo de la vista - datos
	var dashboard = new Dashboard({
		shopName: shopName
	});

	//Vista - eventos y DOM
	new ShopDashboard({
		model: dashboard
	}).loading();

	//Descargamos de internet el modelo y fuerza la actualización de la vista relacionada.
	dashboard.fetch();
}
```

Así momento del renderizado del Dashboard se carga una vista independiente, una subsección:

    scripts/View/DashboardRepairGraph.js

El funcionamiento es el mismo sólo que el modelo ya lo tenemos descargardo. En este caso espera una Collection de Repair.js

    scripts/Collection/Repairs.js

Por ejemplo:

```javascript
	this.graph1 = new DashboardRepairGraph({
		collection: this.model.get('users')
	});
```