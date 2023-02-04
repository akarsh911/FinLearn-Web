<?php
require_once($_SERVER['DOCUMENT_ROOT'] . "/php/database_connect.php");
function create_user($username, $email, $f_name, $l_name, $ph_no, $psw_hash)
{
    $username = $email;
    $conn = openCon();
    $sql = "INSERT INTO students (username,f_name,l_name,email,ph_no,psw_hash,user_state,wallet_balance) VALUES ('$username','$f_name','$l_name','$email','$ph_no','$psw_hash','user_first','10000')";
    if ($conn->query($sql) === TRUE) {
        create_stock_table($username);
        return 1;
    } else {
        return "Error: " . $sql . "<br>" . $conn->error;
    }
}


function login($email, $psw_hash)
{
    $user_object = new stdClass();
    $conn = openCon();
    $sql = "SELECT * FROM students WHERE (email='$email' || ph_no='$email') && psw_hash='$psw_hash'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $arr = array(
                "username" => $row["username"], "f_name" =>   $row["f_name"], "l_name" => $row["l_name"], "email" => $row["email"], "ph_no" => $row["ph_no"],
                "wallet_balance" => $row["wallet_balance"],  "user_state" => $row["user_state"]
            );
            $json = json_encode($arr);
            return $json;
        }
    } else {
        return "nf";
    }
}
function create_stock_table($username)
{
    $conn = openCon();
    $sql = "CREATE TABLE " . $username . " (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    stock_name VARCHAR(50) NOT NULL,
    stock_quantity VARCHAR(50) NOT NULL,
    stock_price VARCHAR(50) NOT NULL,
    stock_gain VARCHAR(50),
    purchased_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";
}
function add_stock($username, $stock_name, $stock_quantity, $stock_price)
{
    $conn = openCon();
    $sql = "INSERT INTO " . $username . " (stock_name,stock_quantity,stock_price,stock_gain) VALUES ('$stock_name','$stock_quantity','$stock_price',0)";
    if ($conn->query($sql) === TRUE) {
        create_stock_table($username);
        return 1;
    } else {
        return "Error: " . $sql . "<br>" . $conn->error;
    }
}
