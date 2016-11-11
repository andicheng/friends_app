app.controller('showController', ['$scope','friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, $routeParams) {

   // $scope.show = function(){
      friendsFactory.show($routeParams.friend, function(data){
         $scope.friend = data;
         console.log('finished loading')
      });
   // };
   console.log('loaded controller');
   // $scope.show()
}]);
