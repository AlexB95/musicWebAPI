var SongController            = require('./controllers/songsController'),
    express                   = require('express');

module.exports = function(app){

    var apiRoutes     = express.Router(),
        songRoutes    = express.Router();

    //Album routes
    apiRoutes.use('/songs', songRoutes);
    songRoutes.get('/', SongController.getSongs);
    songRoutes.post('/', SongController.createSong);
    songRoutes.delete('/:song_id', SongController.deleteSong);

    // Set up routes
    app.use('/v1', apiRoutes);

}
