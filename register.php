<?php
    include('registeraccount.php');
    session_start();
?>

<html>
<head>
    <title>Smoo - Register</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <div id="Register" class="center white" style="width:25%">
        <img src="images/cow.png">
        <fieldset>
            <form method="post" action="">
                Desired Username <br>
                <input type="text" name="user" value="<?php echo $_SESSION['available_username'] ?>"><br>
                Password <br>
                <input type="password" name="pass" value="********"><br><br>
                <div style="text-align:center">
                    <input type="submit" name="register" value="Register">
                </div>
            </form>
            <br>
            </fieldset>
    </div>
</body>
</html>