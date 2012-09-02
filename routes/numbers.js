var random = require("random");

module.exports = Numbers;

function Numbers(){

}

Numbers.prototype = {
    getNumbers: function(req, res){
        var cards = req.body.cards;
        var total = cards * 9;
        var options = {
            min: 1,
            max: 75,
            col: 9,
            num: total
        };
        
        random.generateIntegers(randomCallback, options);
        
        
        function randomCallback(integers){
            var nums = integers;
            res.render('index',{title: "Your Numbers", numbers: nums, viewName: 'numbers'});
        }
    }
}
