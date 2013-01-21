Howto entender esto
===================
Primera ejecución:

```html
<script type="text/javascript" data-main="scripts/main" src="scripts/require.js"></script>
```

El fichero en scripts/main será el primero en cargar y será el desencadenante de todo.

El fichero
	scripts/Model/Interface/Dashboard.js
define la página Dashboard de una tienda en concreto. Dicho modelo necesita el identificador de la tienda: el nombre de la misma. Dicho modelo contiene las relaciones con los datos que se van a mostrar.