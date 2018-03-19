var firebase = require('firebase')
var express = require('express');
var router = express.Router();

var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
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

