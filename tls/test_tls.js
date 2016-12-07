var test = require('tape');
var supports_tls = require('./tls');

test('Checker can determine if IPv7 can support TLS', function (assert) {
    assert.equal(supports_tls('abba[mnop]qrst'), true);
    assert.equal(supports_tls('abcd[bddb]xyyx'), false);
    assert.equal(supports_tls('aaaa[qwer]tyui'), false);
    assert.equal(supports_tls('ioxxoj[asdfgh]zxcvbn'), true);
    assert.equal(supports_tls('ioxxoj[asdfgh]zxcvbn[abba]asdf'), false);
    assert.equal(supports_tls('asdf[asdfgh]abba[asdf]asdf'), true);
    assert.end();
});
