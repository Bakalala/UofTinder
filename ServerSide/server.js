const express = require('express')
const app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


// app.get('/', (req, res) => {
//   res.send('Hello World! This is UofTinder. Happy to meet you')
// });

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
