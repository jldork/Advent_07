var {in_brackets, out_of_brackets, str_permutations, is_diff_palindrome} = require('../helpers') 

var ssl = function(ip) {
    var contains_aba = function(list) {
        permutations = str_permutations(3, list)
        results = []
        for (var i=0; i< permutations.length; i++){
            if (is_diff_palindrome(permutations[i])){
                results.push(permutations[i])
            }
        }
        return results
    }

    aba_oob = out_of_brackets(ip, contains_aba)
    aba_ib = in_brackets(ip, contains_aba)

    var reverses = []
    for (var i=0;i < aba_oob.length; i++){
        for (var j=0; j<aba_ib.length; j++){
            var match = aba_oob[i][0] == aba_ib[j][1] && aba_oob[i][1] == aba_ib[j][0] 
            reverses.push(match);
        }
    }

    return reverses.any()
};

module.exports = ssl;