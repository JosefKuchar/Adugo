const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/app/views')
app.set('view engine', 'ejs');

http.listen(5128);

require('./app/routes.js')(app);