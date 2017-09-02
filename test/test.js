'use strict';

var expect = require('chai').expect;
var message = require('../index');

describe('#hello-world', function() {
    it('message', function() {
        var result = message();
        expect(result).to.equal('Hello World');
    });
});