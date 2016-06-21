<?php
    session_start(); // Starting Session
    $error=''; // Variable To Store Error Message
    if (isset($_POST['register'])) {
        if (empty($_POST['user']) || empty($_POST['pass'])) {
            $error = "Username or Password is invalid";
        }
        else {
            // Define $username and $password
            $username=$_POST['user'];
            $password=$_POST['pass'];
            // Establishing Connection with Server by passing server_name, user_id and password as a parameter
            $connection = mysql_connect("localhost", "jonhao5_admin", "Haoism3192");
            // To protect MySQL injection for Security purpose
            $username = stripslashes($username);
            $password = stripslashes($password);
            $username = mysql_real_escape_string($username);
            $password = mysql_real_escape_string($password);
            $db = mysql_select_db("jonhao5_login", $connection);
            // SQL query to fetch information of registerd users and finds user match.
            $query = mysql_query("INSERT INTO `login` (`username`, `password`, `id`) values ('$username', '$password', 0)", $connection);
            if (mysql_affected_rows() == 1) {
                header("location: index.php");
            }
            else {
                echo "Failed registration";
            }
            mysql_close($connection); // Closing Connection
        }
    }
?>