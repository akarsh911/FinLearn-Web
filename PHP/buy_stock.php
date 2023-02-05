<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/php/database_get_data.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/php/database_set_data.php');
$username = trim($_GET["email"], '\'"');
$stock_name = trim($_GET["stock_name"], '\'"');
$stock_quantity = trim($_GET["stock_quantity"], '\'"');
$stock_price = trim($_GET["stock_price"], '\'"');

$price = (float)$stock_price * (float)$stock_quantity;
$resp = get_balance_values2($username);
if ($price <= (float)$resp) {
    echo $price;
    $rem = (float)$resp - (float)$price;
    add_stock($username, $stock_name, $stock_quantity, $stock_price);

    update_balance($username, $rem);
}
//echo '<script>window.onload = (event) => {location.replace("/html/holdings.html")};</script>';