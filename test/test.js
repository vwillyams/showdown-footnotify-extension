var expect = require('expect.js'),
    showdown = require('showdown');

describe('tests', function() {

  describe('should probably add something here, huh?', function() {

    var converter;
    var filter = require('../showdown-footnotify-extension');
    beforeEach(function(done) {
      converter = new showdown.Converter({extensions: [filter]});
      done();
    });

    it("probably works, right? WHY NOT!", function(done) {
      done();
    });

  });
});
