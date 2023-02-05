<?php
require_once($_SERVER['DOCUMENT_ROOT'] . "/php/database_connect.php");
function check_user_exists($email)
{
    $conn = openCon();
    $sql = "SELECT f_name FROM students WHERE email='$email' || ph_no='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            return 1;
        }
    } else {
        return 0;
    }
}
function get_user_state($email)
{
    $conn = openCon();
    $sql = "SELECT user_state FROM students WHERE email='$email' || ph_no='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            return $row['user_state'];
        }
    } else {
        return 0;
    }
}

function get_email($email)
{
    $conn = openCon();
    $sql = "SELECT email FROM students WHERE email='$email' || ph_no='$email'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            return $row['email'];
        }
    } else {
        return 0;
    }
}

function get_balance_values($email)
{
    $user_object = new stdClass();
    $conn = openCon();
    $sql = "SELECT * FROM students WHERE (email='$email' || ph_no='$email')";
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
function get_balance_values2($email)
{
    $user_object = new stdClass();
    $conn = openCon();
    $sql = "SELECT * FROM students WHERE (email='$email' || ph_no='$email')";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
           return $row["wallet_balance"];
        }
    } else {
        return "nf";
    }
}