var test = require('tape');
var supports_ssl = require('./ssl');

test('Checker can determine if IPv7 can support SSL', function (assert) {
    assert.equal(supports_ssl('aba[bab]xyz'), true);
    assert.equal(supports_ssl('xyx[xyx]xyx'), false);
    assert.equal(supports_ssl('aaa[kek]eke'), true);
    assert.equal(supports_ssl('zazbz[bzb]cdb'), true);
    assert.equal(supports_ssl('zzz[bzba]rcdcr[qdcdr]dff'), true);
    assert.end();
});
