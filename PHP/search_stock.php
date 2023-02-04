<?php
// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
$name=$_GET['keyword'];
$json = file_get_contents('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='.$name.'&apikey=DUVB61PRIEEG0SX8');

$data = json_decode($json, true);

print_r($data);

exit;