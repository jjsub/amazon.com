
'use strict';

module.exports = function(user, cb){
  cb(null, {userId:user._id});
};
