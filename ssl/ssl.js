var {in_brackets, out_of_brackets, str_permutations, is_diff_palindrome} = require('../helpers') 

var ssl = function(ip) {
    var contains_aba = function(list) {
        return str_permutations(3, list).some(is_diff_palindrome)
    }
    return in_brackets(ip, contains_aba) ? false : out_of_brackets(ip, contains_aba)
};

module.exports = ssl;