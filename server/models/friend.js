console.log('friends model');
var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
   first_name: {type: String, required: true},
   last_name: {type: String, required: true},
   birthdate: {type: Date, required: true}
}, {timestamps: true});
var Friend = mongoose.model('Friend', FriendSchema);
