const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/xeonoex-bot', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected with db');
});

const app = express();
require('./routes/flightRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
