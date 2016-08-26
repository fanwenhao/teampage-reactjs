// load models as necessary for api
// var model = require('./models/model');

module.exports = function(app) {
  app.get('/api/hello', function(req, res) {
    console.log(req.query.name + ' is here!')
    res.send({ message: 'hello ' + req.query.name + '!'});
  });
}