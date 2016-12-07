var {in_brackets, str_permutations, is_diff_palindrome} = require('../helpers') 

var contains_abba = function(list) {
    return str_permutations(4, list).some(is_diff_palindrome)
}

var tls = function(ip) {
    var non_brackets = ip.replace(/(\[.*?\])/,"|").split("|")
    var non_brackets_abba = []
    for (var i=0;i<non_brackets.length;i++){
        non_brackets_abba.push(contains_abba(non_brackets[i]))
    }
    
    return in_brackets(ip, contains_abba) ? false : non_brackets_abba.any()
};

module.exports = tls;