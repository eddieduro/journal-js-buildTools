var expect = require('chai').expect;
var Entry = require('./../js/entry.js').Entry;

describe("Entry", function() {
  describe("title", function() {
    it("will return the title of journal entry", function() {
      var title = "welcome";
      var body = "random text";
      var testEntry = new Entry(title, body);
      expect(testEntry.title).to.equal(title)
    });

    describe("body", function(){
      it("will return the body of journal entry", function() {
        var title = "welcome";
        var body = "random text";
        var testEntry = new Entry(title, body);
        expect(testEntry.body).to.equal(body);
      });
    });
  });
});
