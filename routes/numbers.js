var random = require("random");

module.exports = Numbers;

function Numbers(){

}

Numbers.prototype = {
    getNumbers: function(req, res){
        var nums = [
            [1,34,54,23],
            [65,23,24,2]
        ]
        res.render('index',{title: "Your Numbers", numbers: nums, viewName: 'numbers'});
    }
}
