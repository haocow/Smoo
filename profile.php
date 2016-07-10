<?php
    include('session.php');
?>

<html>
<head>
    <title>Smoo - Profile</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <div id="profile">
        <b id="welcome">Welcome : <i><?php echo $login_session; ?></i></b>
        <b id="logout"><a href="logout.php">Log Out</a></b>
    </div>
</body>
</html>