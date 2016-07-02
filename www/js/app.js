// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in starterControllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // Drag control
    $('#list-outer-container').draggable({ axis: "y", containment: "parent", handle: "#prop-ctrl", drag: function(event, ui) {
      $('#list-scroll').height((350 - ui.position.top) + "px");
    }});
    $('#scenery-outer-container').draggable({ axis: "y", containment: "parent", handle: "#scenery-prop-ctrl", drag: function(event, ui) {
      $('#scenery-scroll').height((200 - ui.position.top) + "px");
    }});
    $('#route-outer-container').draggable({ axis: "y", containment: "parent", handle: "#route-prop-ctrl", drag: function(event, ui) {
      $('#route-scroll').height((200 - ui.position.top) + "px");
    }});
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  /*$stateProvider

  // setup a state for the scenary page
  .state('scenery', {
    url: '/scenery',
    templateUrl: 'scenery.html',
  })
  
  .state('login', {
    url: '/login',
    templateUrl:'login.html',
  })

  .state('index', {
    url: '/index',
    templateUrl:'index.html',
  })

  .state('avatar', {
    url: '/avatar',
    templateUrl: 'avatar.html'
  });*/

  // Each tab has its own nav history stack:
  /*
    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
            }
        }
    })

    .state('tab.chats', {
        url: '/chats',
    views: {
        'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
    controller: 'ChatsCtrl'
        }
    }
    })
    .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
            'tab-chats': {
                templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
            }
        }
    })

    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
            }
        }
    });*/

    //.otherwise('/');
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');

});
