var {in_brackets, out_of_brackets, str_permutations, is_diff_palindrome} = require('../helpers') 

var tls = function(ip) {
    var contains_abba = function(list) {
        return str_permutations(4, list).some(is_diff_palindrome)
    }
    return in_brackets(ip, contains_abba).length > 0 ? false : out_of_brackets(ip, contains_abba).length > 0
};

module.exports = tls;