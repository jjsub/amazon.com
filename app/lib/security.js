'use strict';

//var User = require('../models/user');

exports.locals = function(req, res, next){
  res.locals.user = req.user;
  next();
};

exports.bounce = function(req, res, next){
  if(res.locals.user){
    next();
  }else{
    res.redirect('/login');
  }
};

