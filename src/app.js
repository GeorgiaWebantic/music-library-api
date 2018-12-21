const express = require('express');
const app = express();
const artist = require('./controllers/artists.js');

app.use(express.json());
app.post('/artists', artist.create);
app.get('/artists', artist.find);
app.get('/artists/:artistId', artist.findOne);
app.patch('/artists/:artistId', artist.patch);
app.delete('/artists/:artistId', artist.delete);

module.exports = app;
