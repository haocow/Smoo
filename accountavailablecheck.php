<?php
    session_start();

    if (isset($_POST['check'])) {
        $username=$_POST['user'];

        $connection = mysql_connect("localhost", "jonhao5_admin", "Haoism3192");
        $db = mysql_select_db("jonhao5_login", $connection);

        $query = mysql_query("select * from login where username='$username'");

        $rows = mysql_num_rows($query);
        if ($rows == 0) {
            $_SESSION['available_username'] = $username;
            header("location: register.php");
        }
        else {
            echo "<p>USERNAME NOT AVAILABLE</p>";
        }
    }
?>