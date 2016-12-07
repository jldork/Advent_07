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
        bracketed_abba.push(array_4chars(bracketed).some(is_abba))
    }
    

    return bracketed_abba.any()
}

var tls = function(ip) {
    var abba_in_ip = array_4chars(ip.replace(/(\[.*?\])/,"")).some(is_abba); 
    return abba_in_brackets(ip) ? false : abba_in_ip
};

module.exports = tls;