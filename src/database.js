'use strict'

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mean-todo', function(err) {
    if (err) {
        console.log('Failed connection')
    } else {
        console.log('Successfully connected to Mongo!')
    }
});
