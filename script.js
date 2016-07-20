// create the module and name it smooApp
var smooApp = angular.module('smooApp', ['ngRoute']);

// configure routes
smooApp.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })

            .when('/add', {
                 templateUrl: 'pages/add.html',
                 controller: 'addController'
            })

            .when('/view', {
                templateUrl: 'pages/view.html',
                controller: 'viewController'
            })
    }
);

// create the controller and inject Angular's $scope
smooApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    $scope.showButton = function() {
        // This is required to render the Google sign-in button
        // https://blog.codecentric.de/en/2014/06/angularjs-google-sign-integration/
        console.log('Showing the Google button')
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/client:plusone.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    }
});

smooApp.controller('addController', function($scope) {
    $scope.message = 'Add new transactions here';
});

smooApp.controller('viewController', function($scope) {
    $scope.message = 'View your google sheet here';
});


/* FUNCTIONS */
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}
