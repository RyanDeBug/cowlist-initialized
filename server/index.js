const express = require('express');
const app = express();
const port = 3000;
const { save, get } = require('../database');
const parser = require('body-parser');

app.use(parser.json());
app.use(express.static('./client/dist'));

app.get('/allcows', (req, res) => {
  //query database, need to know what the database function takes in
  console.log('we got inside get');
  get()
    .then(data => {
      console.log('sucessful data get!');
      res.json(data);
    })
    .catch(err => {
      res.send('could not get data from server');
      console.log('err in app.get is ', err);
    });

  //attach the results to the req
  //return err and req
});

app.post('/allcows', (req, res) => {
  //query database, need to know what the database function takes in
  save(req.body).then(err => {
    if (err) console.log('error in app.post', err);
    else res.send('successful addition to the database!');
  });

  //attach the results to the req
  //return err and req
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
