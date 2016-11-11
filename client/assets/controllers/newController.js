app.controller('newController', ['$scope','friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, $routeParams) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
   var index = function(){
      friendsFactory.index(function(returnedData){
         $scope.friends = returnedData;
      });
   };
   index();

   $scope.add = function(){
      friendsFactory.create($scope.newFriend)
      index();
      $scope.newFriend = {};
      $location.url('/')
   };

   $scope.delete = function(id){
      friendsFactory.delete(id);
      index();
   };
}]);
