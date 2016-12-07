Array.prototype.any = function(func) {
   return this.some(func || function(x) { return x });
}


var out_of_brackets = function(ip, callback){
    var non_brackets = ip.replace(/(\[.*?\])/,"|").split("|")
    var non_brackets_aba = []
    for (var i=0;i<non_brackets.length;i++){
        if (callback(non_brackets[i])){
            non_brackets_aba.push(non_brackets[i])
        }
    }
    return non_brackets_aba
}

var in_brackets = function(string, callback) {
    var beginnings = [];
    var endings = [];
    for( var i=0; i < string.length; i++ ) {
        if (string[i] === "[") beginnings.push(i+1);
        if (string[i] === "]") endings.push(i);
    }

    var bracketed_abba = []
    for( var i=0; i < endings.length; i++){
        var bracketed = string.slice(beginnings[i], endings[i])
        if (callback(bracketed)){
            bracketed_abba.push(bracketed)
        }
    }
    
    return bracketed_abba
};

var str_permutations = function(num_chars, string) {
    var permutations = []
    for (i=0; i < string.length - num_chars + 1; i++){
        permutations.push(string.slice(i,i+num_chars))
    }
    return permutations
};

var is_diff_palindrome = function(string) {
    var palindrome = string == string.split('').reverse().join('');
    var diff_digits = string.charAt(0) != string.charAt(1)
    return (palindrome && diff_digits)
}

var helpers = {
    in_brackets : in_brackets,
    out_of_brackets: out_of_brackets,
    str_permutations : str_permutations,
    is_diff_palindrome : is_diff_palindrome
};

module.exports = helpers;