var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

console.log('friends controller');
function FriendsController(){
   this.index = function(req,res){
      Friend.find({}, function(err, friends){
         if(err){
            console.log('loading error');
            return res.sendStatus('500');
         }else{
            console.log('successfully getting friends');
         }
         res.json(friends);
      })
   };
   this.create = function(req,res){
      var friend = new Friend({first_name: req.body.first_name, last_name: req.body.last_name, birthdate: req.body.birthdate});
      friend.save(function(err){
         if(err){
            console.log('issues loading a new friend')
         } else {
            console.log("successfully added a new friend!");
            res.redirect('/');
         }
      })
  };
  this.update = function(req,res){
     console.log(req.params.id)
     Friend.findOne({_id: req.params.id}, function(err, friend){
         friend.first_name = req.body.first_name;
         friend.last_name = req.body.last_name;
         friend.birthdate = req.body.birthdate;
         friend.save(function(err){
            if(err){
               console.log('issues updating a friend')
            } else {
               console.log("successfully updated a friend!");
               res.sendStatus(200);
            }
         })
      })
  };
  this.delete = function(req,res){
     Friend.remove({_id: req.params.id}, function(err){
         if(err){
            console.log('issues deleting a friend')
         } else {
            console.log("successfully deleted a friend!");
            res.sendStatus(200);
         }
      })
  };
  this.show = function(req,res){
     Friend.findOne({_id: req.params.id}, function(err, friend){
         if(err){
            console.log('loading error');
            return res.sendStatus('500');
         }else{
            console.log('successfully getting friend');
            res.json(friend);
         }
      })
  };
}
module.exports = new FriendsController(); // what does this export?
