<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/php/database_get_data.php');
//require_once($_SERVER['DOCUMENT_ROOT'] . '/php/database_set_data.php');
$username = trim($_GET["email"], '\'"');
$resp = get_balance_values($username);
if ($resp == "nf") {
} else {
    echo $resp;
}
