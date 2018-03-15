module.exports = function () {
  switch (process.env.NODE_ENV) {
    case 'local':
      return {
        'url': 'mongodb://localhost:27017/MyMusic',
        options: {
          useMongoClient: true
        }
      }
      break;
    case 'dev':
      return {
        'url': 'mongodb://music:uVaLvvjkshHgzYSB@ds115124.mlab.com:15124/heroku_dkk0w1ph',
        options: {
          useMongoClient: true
        }
      }
      break;
  }
}

//SET NODE_ENV=local

//uVaLvvjkshHgzYSB