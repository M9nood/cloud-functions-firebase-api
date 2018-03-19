var firebase = require('firebase')
var express = require('express');
var router = express.Router();

var config = {
  apiKey: "AIzaSyDa_6thYTOzbbhFrKxlzZ3QPUDHjmIdDyk",
  authDomain: "midterm-news.firebaseapp.com",
  databaseURL: "https://midterm-news.firebaseio.com",
  projectId: "midterm-news",
  storageBucket: "midterm-news.appspot.com",
  messagingSenderId: "633739253627"
};
var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()

// get all news
router.get('/', function(req, res, next) {
  return db.ref('news').once('value').then(function(snapshot) {
    var data = snapshot.val();
    res.send(data)
  });
});

router.post('/add/:type', function (req, res, next) {
  db.ref('news/' + req.params.type).push({
    title: req.data.title,
    content: req.data.content
  })
  res.send("insert finished")
});

module.exports = router;

