<html>
<head>
    <title>Smoo</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <script src="./onSignIn.js" async defer></script>
    <meta name="google-signin-client_id" content="968845654756-jmep9det2p6uaibo34iqg6anh7tr3d2k.apps.googleusercontent.com">
</head>

<body>
    <div id="Sign-In" class="center white" style="width:25%">
        <a href="index.php">
            <img src="images/cow.png">
        </a>
        <hr>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <script console.log('ID: ');
    </div>
</body>
</html>