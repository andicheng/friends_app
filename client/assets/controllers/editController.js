app.controller('editController', ['$scope','friendsFactory', '$location','$routeParams', function($scope, friendsFactory, $location, $routeParams) {

   var index = function(){
      friendsFactory.index(function(returnedData){
         $scope.friends = returnedData;
      });
   };

   $scope.show = function(){
      friendsFactory.show($routeParams.friend, function(data){
         $scope.friend = data;
      });
   };
   $scope.show()

   $scope.edit = function(id){
      friendsFactory.update(id, $scope.newFriend, function(){

         $location.url('/')
      })
   }
}]);
