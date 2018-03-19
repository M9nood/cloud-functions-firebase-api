var firebase2 = require('firebase')
var express2 = require('express');
var income = express2.Router();

var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
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

