
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'U-Pick-Em', numbers: [[]], viewName: 'main' });
};