#! /usr/bin/env node

console.log('This script populates some test instructors to the database. Specified database as argument - e.g.: populateinstructors mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Instructor = require('./models/instructor')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "Jukipow" });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var instructors = []

function instructorCreate(first_name, last_name, phone, email, ski_level, snowboard_level, cb) {
    instructordetail = {
        first_name: first_name,
        last_name: last_name,
        phone: phone,
        email: email,
        ski_level: ski_level,
        snowboard_level: snowboard_level

    }

    var instructor = new Instructor(instructordetail);
    instructor.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New Instructor: ' + instructor);
        instructors.push(instructor)
        cb(null, instructor)
    });
}



function createInstructors(cb) {
    async.parallel([
        function (callback) {
            instructorCreate('Lars', 'Gravgaard', '+4542928788', 'lars@gravgaard.com', 'Anwärter', '', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Lars', 'Gravgaard', '+4542928788', 'lars@gravgaard.com', 'Anwärter', '', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Lars', 'Gravgaard', '+4542928788', 'lars@gravgaard.com', 'Anwärter', '', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Lars', 'Gravgaard', '+4542928788', 'lars@gravgaard.com', 'Anwärter', '', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Lars', 'Gravgaard', '+4542928788', 'lars@gravgaard.com', 'Anwärter', '', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Lars', 'Gravgaard', '+4542928788', 'lars@gravgaard.com', 'Anwärter', '', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Lars', 'Gravgaard', '+4542928788', 'lars@gravgaard.com', 'Anwärter', '', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Lars', 'Gravgaard', '+4542928788', 'lars@gravgaard.com', 'Anwärter', '', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Lars', 'Gravgaard', '+4542928788', 'lars@gravgaard.com', 'Anwärter', '', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Lars', 'Gravgaard', '+4542928788', 'lars@gravgaard.com', 'Anwärter', '', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Lars', 'Gravgaard', '+4542928788', 'lars@gravgaard.com', 'Anwärter', '', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
        function (callback) {
            instructorCreate('Steffen', 'Pedersen', '+4550746170', 'steffen@pedersen.com', 'Landes 2', 'Landes 1', callback);
        },
    ],
        // optional callback
        cb);
}

async.series([
    createInstructors,
],
    // Optional callback
    function (err, results) {
        if (err) {
            console.log('FINAL ERR: ' + err);
        }
        else {
            console.log('Instructors: ' + instructors);

        }
        // All done, disconnect from database
        mongoose.connection.close();
    });



