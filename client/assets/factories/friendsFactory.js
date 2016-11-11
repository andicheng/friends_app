
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.index = function(callback){
      $http.get('/friends').then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });
    };
    this.create = function(newfriend){
      $http.post('/friends', newfriend).then(function(){
      });
    };
    this.update = function(id, newFriend, callback){
      $http.put('/friends/'+id, newFriend).then(function(){
         console.log("updated friend")
         callback();
      })
    };
    this.delete = function(id){
       $http.delete('/friends/'+id).then(function(){
         console.log("friend deleted")
      });
    };
    this.show = function(friend, callback){// what parameters do we need?
      $http.get('/friends/'+friend).then(function(returned_data){
        friend = returned_data.data;
        callback(friend);
      });
   };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(callback){
        callback(friend);
    };
  }
  // console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
