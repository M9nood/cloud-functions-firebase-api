var firebase2 = require('firebase')
var express2 = require('express');
var income = express2.Router();

var config = {
  apiKey: "AIzaSyDa_6thYTOzbbhFrKxlzZ3QPUDHjmIdDyk",
  authDomain: "midterm-news.firebaseapp.com",
  databaseURL: "https://midterm-news.firebaseio.com",
  projectId: "midterm-news",
  storageBucket: "midterm-news.appspot.com",
  messagingSenderId: "633739253627"
};
var firebaseApp2 = firebase2.initializeApp(config)
var dbIncome = firebaseApp2.database()

// get all news
income.get('/', function(req, res, next) {
  return dbIncome.ref('income').once('value').then(function(snapshot) {
    var data = snapshot.val();
    res.send(data)
  });
});

module.exports = income;

