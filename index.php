<?php
    include('login.php'); // Includes Login Script
    if(isset($_SESSION['login_user'])){
        header("location: profile.php");
    }
?>

<html>
<head>
    <title>Smoo</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <div id="Sign-In" class="center white" style="width:25%">
        <a href="index.php">
            <img src="images/cow.png">
        </a>
        <fieldset>
            <form method="post" action="">
                Username <br>
                <input type="text" name="user" value="test"><br>
                Password <br>
                <input type="password" name="pass" value="testpass"><br><br>
                <div style="text-align:center">
                    <input type="submit" name="submit" value="Log In">
                </div>
            </form>
            <hr>
            <p class="center" style="color:grey">Don't have an account?  Register <a href="checkusername.php">here!</a></p>
        </fieldset>
    </div>
</body>
</html>