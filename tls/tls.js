var {in_brackets, out_of_brackets, str_permutations, is_diff_palindrome} = require('../helpers') 

var tls = function(ip) {
    var contains_abba = function(list) {
        permutations = str_permutations(4, list)
        results = []
        for (var i=0; i<permutations.length; i++){
            if(is_diff_palindrome(permutations[i])){
                results.push(permutations[i])
            }
        }
        return results
    }
    return in_brackets(ip, contains_abba).length > 0 ? false : out_of_brackets(ip, contains_abba).length > 0
};

module.exports = tls;