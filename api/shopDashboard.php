<?php
//$_GET['ShopName'] = *


usleep(0.5*1000000);

$user1 = array(
	'id' => 1,
	'name' => "Paquito",
	'repairs' => array(
		array(
			'id' => 1,
			'nombre' => "Problema 1"
		),
		array(
			'id' => 2,
			'nombre' => "Problema 2"
		),
		array(
			'id' => 3,
			'nombre' => "Problema 3"
		)
	)
);

$user2 = array(
	'id' => 2,
	'name' => "Lusiito",
	'repairs' => array(
		array(
			'id' => 4,
			'nombre' => "Problema 4"
		),
		array(
			'id' => 5,
			'nombre' => "Problema 5"
		)
	)
);

$shopDashboard = array(
	'users' => array(
		$user1, $user2
	),
	'repairsNotAssigned' => array(
		array(
			'id' => 10,
			'nombre' => "Problema 10"
		),
		array(
			'id' => 12,
			'nombre' => "Problema 12"
		)
	)
);

echo json_encode($shopDashboard);

?>