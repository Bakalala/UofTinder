const express = require('express')
const app = express();
var path = require('path');


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Ali:Ali@uoftinder.fkwdz.mongodb.net/UofTinder?retryWrites=true&w=majority";


MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Users");
  var myobj = { name: "Ali", Password: "Ali" };
  dbo.collection("Users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});



app.get('/', (req, res) => {
  res.send('Hello World! This is UofTinder. Happy to meet you and I wanna eat u ')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

