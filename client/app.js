var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'templates/list.html',
      controller:'empController'
    })
    .when('/employees',{
      templateUrl:'templates/list.html',
      controller:'empController'
    })
    .when('/employess/create',{
      templateUrl:'templates/add.html',
      controller:'empController'
    })
    .when('/employess/:id/edit',{
      templateUrl:'templates/edit.html',
      controller:'empController'
    })
    .when('/employess/:id/show',{
      templateUrl:'templates/show.html',
      controller:'empController'
    });
});
