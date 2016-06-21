<?php
    include('accountavailablecheck.php');
?>

<html>
<head>
    <title>Smoo - Register</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <div id="Sign-In" class="center white" style="width:25%">
        <img src="images/cow.png">
        <fieldset>
            <form method="post" action="">
                Desired Username <br>
                <input type="text" name="user" value="<?php echo $_POST['user'] ?>"><br><br>
                <div style="text-align:center">
                    <input type="submit" name="check" value="Check Availability">
                </div>
            </form>
            <br>
        </fieldset>
    </div>
</body>
</html>