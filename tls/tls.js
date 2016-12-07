Array.prototype.any = function(func) {
   return this.some(func || function(x) { return x });
}

var array_4chars = function(string) {
    var permutations = []
    for (i=0; i < string.length - 3; i++){
        permutations.push(string.slice(i,i+4))
    }
    return permutations
};

var is_abba = function(string) {
    var palindrome = string == string.split('').reverse().join('');
    var diff_digits = string.charAt(0) != string.charAt(1)
    return (palindrome && diff_digits)
}

var contains_abba = function(list) {
    return array_4chars(list).some(is_abba)
}

var abba_in_brackets = function(string) {
    var beginnings = [];
    var endings = [];
    for( var i=0; i < string.length; i++ ) {
        if (string[i] === "[") beginnings.push(i+1);
        if (string[i] === "]") endings.push(i);
    }

    var bracketed_abba = []
    for( var i=0; i < endings.length; i++){
        var bracketed = string.slice(beginnings[i], endings[i])
        console.log("BRACKETED: ", bracketed, array_4chars(bracketed).some(is_abba))
        bracketed_abba.push(contains_abba(bracketed))
    }
    

    return bracketed_abba.any()
}

var tls = function(ip) {
    var non_brackets = ip.replace(/(\[.*?\])/,"|").split("|")
    var non_brackets_abba = []
    for (var i=0;i<non_brackets.length;i++){
        non_brackets_abba.push(contains_abba(non_brackets[i]))
    }
    
    return abba_in_brackets(ip) ? false : non_brackets_abba.any()
};

module.exports = tls;