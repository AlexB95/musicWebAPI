var Song = require('../models/songsModel');
exports.getSongs = function (req, res, next) {

    Song.find(function (err, songs) {
        if (err) {
            res.send(err);
        }
        res.json(songs);
    });
}

exports.createSong = function (req, res, next) {

    var title = req.body.name;
    var artist = req.body.artists[0].name;
    var preview_url = req.body.preview_url;
    var image_small = req.body.album.images[2].url;
    var image_medium = req.body.album.images[1].url;
    var image_large = req.body.album.images[0].url;
    var open_url = req.body.external_urls.spotify;
    var song_id = req.body.id;
    if (!title) {
        return res.status(400).send({
            error: 'You must enter a title'
        });
    }
    Song.findOne({
        title: title
    }, function (err, existingSong) {

        if (err) {
            return next(err);
        }

        if (existingSong) {
            return res.status(400).send({
                error: 'That Song is already in our records'
            });
        }

        var song = new Song({
            title: title,
            artist: artist,
            preview_url: preview_url,
            image_small: image_small,
            image_medium: image_medium,
            image_large: image_large,
            open_url: open_url,
            song_id: song_id
        });

        song.save(function (err, song) {

            if (err) {
                return next(err);
            }

            res.status(201).json({
                Song: song
            });
        });
    });
}

exports.deleteSong = function (req, res, next) {

    Song.remove({
        song_id: req.params.song_id
    }, function (err, song) {
        res.json(song);
    });

}