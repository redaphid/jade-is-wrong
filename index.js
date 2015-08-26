'use strict';
var app = angular.module('jade-is-wrong', ['ui.router']);
//TODO - remove checkLogin function
// create the module and name it octobluApp
app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/jade');
  $locationProvider.html5Mode({ enabled: true, requireBase: false});  
  $stateProvider
    .state('jade', {
      url: '/jade',
      templateUrl: '/pages/jade.html'      
    })
    .state('jade.is', {
      url: '/is',
      templateUrl: '/pages/is.html'      
    })
    .state('jade.is.wrong', {
      url: '/wrong',
      templateUrl: '/pages/wrong.html'
    });
    
    $stateProvider
      .state('aaron', {
        url: '/aaron',
        templateUrl: '/pages/aaron.html'      
      })
      .state('aaron.is', {
        url: '/is',
        templateUrl: '/pages/is.html'      
      })
      .state('jade.is.right', {
        url: '/right',
        templateUrl: '/pages/right.html'
      });
});