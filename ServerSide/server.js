const express = require('express')
const app = express();
const bcrypt = require('bcrypt')

var path = require('path')

app.use(express.json())

const users = []

// viewed at http://localhost:8080
// GET: getting the stored resource (html file) and sendning to
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// GET: getting the stored resource and sending to client
app.get('/users', (req, res) => {
  res.json(users)
});

// POST is used to send data to a server to create/update a resource
app.post('/users', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt()
    const hashed_password = await bcrypt.hash(req.body.password, salt)
    console.log(salt)
    console.log(hashed_password)
    const user = { name: req.body.username, password: hashed_password}
    users.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send('ERROR')
  }

});


// POST is used to send data to a server to create/update a resource
app.post('/users/login', async (req, res) => {
  const user = users.find(user => user.username = req.body.username)
  //res.send(req.body.username)
  //res.send(user.username)
  if (user == null) return res.status(400).send('No user matches')
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success')
    } else {
      res.send('Failure')
    }
  } catch {
    res.status(500).send('ERROR')
  }

});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
