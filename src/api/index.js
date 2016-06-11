'use strict';

var express = require('express');
var todos = require('../../mock/todos.json')

var router = express.Router();

router.get('/todos',function(req,res,next){
  res.json({todos: todos})
});

// TODO: Add POST route to create new entries

// TODO: Add PUT route to edit new entries

// TODO: Add DELETE route to delete new entries

module.exports = router;
