var express = require('express');
var url = require('url');
var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

app.post('/signup', (req, res, next) => {
  // res
  //   .status(404)
  //   .json({ error: 'There was an error with the sign up request' });

  setTimeout(() => {
    res.json({ result: 'success' });
  }, 500);
});
