<?php
require_once($_SERVER['DOCUMENT_ROOT'] . "/PHP/database_connect.php");
function create_user($email, $f_name, $l_name, $ph_no, $psw_hash)
{
    $conn = openCon();
    $sql = "INSERT INTO students (f_name,l_name,email,ph_no,psw_hash,user_state,wallet_balance) VALUES ('$f_name','$l_name','$email','$ph_no','$psw_hash','user_first','10000')";
    if ($conn->query($sql) === TRUE) {
        return 1;
    } else {
        return "Error: " . $sql . "<br>" . $conn->error;
    }
}
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

function login($email, $psw_hash)
{
    $conn = openCon();
    $sql = "SELECT * FROM students WHERE (email='$email' || ph_no='$email') && psw_hash='$psw_hash'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            return $row["f_name"];
        }
    } else {
        return "nf";
    }
}