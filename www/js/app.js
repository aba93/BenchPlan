'Use Strict';
angular.module('App', ['ionic','ngStorage', 'ngCordova','firebase','ngMessages', 'ngRoute'])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'loginController'
    })
    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'views/tabs/tabs.html'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'views/forgot/forgot.html',
      controller:'forgotController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register/register.html',
      controller:'registerController'
    })
    /*.state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html',
      controller:'homeController'
    })*/
    .state('tabs.plantilla', {
      url: '/plantilla',
      views: {
        'plantilla-tab' : {
          templateUrl: 'views/plantilla/plantilla.html',
          controller:'plantillaController'
        }
      }
    }) 
    .state('addPlayer', {
      url: '/addPlayer',
      templateUrl: 'views/addPlayer/addPlayer.html',
      controller:'addPlayerController'
    })
    .state('tabs.detail', {
      url: '/plantilla/:aId',
      views: {
        'plantilla-tab' : {
          templateUrl: 'views/detail/detail.html',
          controller:'plantillaController'
        }
      }
    }) 
    /*.state('detail', {
      url: '/detail/:aId',
      templateUrl: 'views/detail/detail.html',
      controller:'plantillaController'
    })*/
    ;
$urlRouterProvider.otherwise("/login");
})
// Changue this for your Firebase App URL.
.constant('FURL', 'https://torrid-inferno-6199.firebaseio.com/')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

