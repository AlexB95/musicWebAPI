module.exports = function (env) {
  switch (env) {
    case 'local':
      return {
        'url': 'mongodb://localhost:27017/MyMusic',
        options: {
          useMongoClient: true
        }
      }
      break;
    case 'Atlas':
      return {
        'url': '"mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/test"',
        options: {
          useMongoClient: true
        }
      }
      break;
  }
}

//SET NODE_ENV=local