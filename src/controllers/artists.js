const Artist = require('../models/artist');

exports.create = (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });
  artist.save()
  .then(() => {
    res.status(201).json(artist.toObject());
  });
};

exports.find = (req, res) => {
  Artist.find()
    .then((artists) => {
      res.status(200).json(artists);
    });
};

exports.findOne = (req, res) => {
  Artist.findOne({ _id: req.params.artistId }, (err, artist) => {
    if (err || artist === null) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      res.status(200).json(artist);
    }
  });
};

exports.patch = (req, res) => {
  Artist.findOne({ _id: req.params.artistId }, (error, artist) => {
    if (error || artist === null) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      artist.set({ genre: 'Psychedelic Rock' });
      artist.save(function (updatedArtist) {
        console.log(updatedArtist);
        res.status(200).json(updatedArtist);
      });
    }
  });
};

exports.delete = (req, res) => {
  Artist.findOne({ _id: req.params.artistId }, (error, artist) => {
    if (error || artist === null) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      artist.delete({ artist: null });
      artist.save(function (updatedArtist) {
        res.status(204).json(updatedArtist);
      });
    }
  });
};
