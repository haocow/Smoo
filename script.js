// google stuff
var googleAuth = null;
var googleUser = null;

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

            .when('/signout', {
                templateUrl: 'pages/signout.html',
                controller: 'mainController'
            })
    }
);

// create the controller and inject Angular's $scope
smooApp.controller('mainController', function($scope) {
    $scope.showGoogleButton = function() {
        // https://blog.codecentric.de/en/2014/06/angularjs-google-sign-integration/
        console.log('Showing the Google button');
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/platform.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    }

    $scope.signOut = function() {
        console.log('User signing out.');
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }
});

smooApp.controller('addController', function($scope) {
	if (googleAuth == null) {
	    // Not signed in
	    $scope.message = 'Please sign in first'
	} else {
	    // Already signed in
	    var profile = getCurrentUserProfile();
	    $scope.message = 'Adding page for ' + profile.getName();
	}
});

smooApp.controller('viewController', function($scope) {
	if (googleAuth == null) {
	    // Not signed in
	    $scope.message = 'Please sign in first'
	} else {
	    // Already signed in
        var profile = getCurrentUserProfile();
        $scope.message = 'Viewing page for ' + profile.getName();
	}
});


/* FUNCTIONS */
function onSignIn(googleUser) {
    googleAuth = gapi.auth2.getAuthInstance();
	var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}

function getMetaContent(Name) {
	var metaTags = document.getElementsByTagName('meta');

	for (var i = 0; i < metaTags.length; i++) {
		if (metaTags[i].getAttribute("name") == Name) {
			return metaTags[i].getAttribute("content");
		}
	}
	return null;
}

function getCurrentUserProfile() {
	if (googleUser == null) {
		googleUser = googleAuth.currentUser.get();
	}
	return googleUser.getBasicProfile();
}

