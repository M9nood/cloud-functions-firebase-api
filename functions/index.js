const functions = require('firebase-functions')
const admin = require('firebase-admin')
//admin.initializeApp(functions.config().firebase);
const firebase = require('firebase')

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
//var index = require('./routes/index');
// var income = require('./routes/incomes');
//var news = require('./routes/news');

exports.addNews = functions.https.onRequest((request, response) => {
  db.ref('news/entertain/').push({
    title: "fdgdf",
    content: "454564"
  })
  response.send("insert finished")
  
});
exports.getNews = functions.https.onRequest((request, response) => {
  return db.ref('news').once('value').then(function(snapshot) {
    var data = snapshot.val();
    response.send(data)
  });
});
exports.incomes = functions.https.onRequest((request, response) => {
  return db.ref('income').once('value').then(function(snapshot) {
    var data = snapshot.val();
    response.send(data)
  });
});


//exports.api1 = functions.https.onRequest(index)
// exports.income = functions.https.onRequest(income)
// //exports.news = functions.https.onRequest(news)


