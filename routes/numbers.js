var RandomJs = require('randomorg-js');
var _ = require('underscore');
var q = require('q');


exports.getNumbers = function(req, res){
  var promises = [];
  for(var i=0;i<req.body.cards;i++) {
    console.log('Adding request number ' + (i+1) + ' to the array.');
    promises.push(getCard());
  }
  console.log('Waiting for the promises to finish.');
  q.all(promises)
    .done(function(cards){
      console.log(JSON.stringify(cards));
      res.render('index', {title: 'Your Numbers', numbers:cards, viewName: 'numbers'});
    });
};

function getCard() {
  console.log('Top of getCard method');
  var deferred = q.defer();
  var JsonApi = new RandomJs();
  var result = JsonApi
    .apikey('bc6c26eb-6960-4e14-9eb8-6984297b80b2') // your apikey here
    .headers({'User-Agent': 'tunnckoCore/RandomJS'})
    .method('generateIntegers')
    .params({n:9,min:1,max:75,replacement:false})
    .post(function(xhrOrError, stream, body) {
      console.log('callback for post method');
      console.log(JSON.stringify(body));
      deferred.resolve(body.result.random.data);
    });
  return deferred.promise;
}
