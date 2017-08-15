var express = require('express');
var router = express.Router();

const db = require('../db');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('users', { 
//     title: 'USER LOOKUP',

// });
// });


  router.get('/', function(req, res, next){
      db.query(`
        select * from cd.members;
      `).then( (result) => {
        res.render('users', {
          members:result
      });
    });
  });


module.exports = router;

// Use router.post to post information and router.get to pull
// information from postgres.
// My problems coming from the routes.
