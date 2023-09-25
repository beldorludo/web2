var express = require('express');
var router = express.Router();

const MENU =[
  {
    id :1,
    title :'Marge',
    duration :67,
    budget :98,
    link: 'jj'
  },
  {
    id :2,
    title :'Mario',
    duration :56,
    budget :25,
    link: 'dhf'
  },
  {
    id :3,
    title :'Luigi',
    duration :85,
    budget :6,
    link:' jjjj'
  }
];

router.get('/', function(req, res, next) {
  res.json(MENU);
});

module.exports = router;
