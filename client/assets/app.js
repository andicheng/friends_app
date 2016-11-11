var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
   $routeProvider
      .when('/',{
         templateUrl: 'partials/friends.html',
         controller: "newController"
      })
      .when('/new',{
         templateUrl: 'partials/new.html',
      })
      .when('/edit/:friend',{
         templateUrl: 'partials/edit.html',
         controller: "editController"
      })
      .when('/show/:friend',{
         templateUrl: 'partials/show.html',
      })
      .otherwise({
         redirectTo: '/'
      })
});
