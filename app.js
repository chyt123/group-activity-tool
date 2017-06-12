var express = require('express');
var bodyParser = require('body-parser');
var util = require('./util');
var store = require('./store');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.redirect("/index.html");
});

app.get('/admin', function (req, res) {
  res.redirect("/admin/index.html");
});

app.use(express.static('public'));

app.post('/api/test', (req, res) => {
  let ip = util.getIp(req);
  var name = store.get(ip);
  if (name != undefined) {
    res.json({"name":name});
  } else {
    res.json({});
  }
});


app.post('/api/register', function (req, res) {
  console.log(req.body);
  let ip = util.getIp(req),
    name = req.body.name;
  if (name == undefined || name.length === 0) {
    res.json({});
  } else {
    store.put(ip, name);
    res.json({"name":store.get(ip)});
  }
});

app.post('/api/apply', function (req, res) {
  let ip = util.getIp(req);
  var success = store.apply(ip);
  if (success) {
    res.json({"success": true});
  } else {
    res.json({"success": false});
  }
});

app.get('/api/getAll', function (req, res) {
  res.json(store.getAll());
});

app.get('/api/getWinner', function (req, res) {
  res.json(store.getWinner());
});

app.post('/api/reset', function (req, res) {
  store.reset();
  res.json({"status": store.getFlag()});
});



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});