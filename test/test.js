const assert = require("assert");
const woltlab = require("./../index");

describe('Client', () => {
  describe('#getIndex()', () => {
    it('should not be empty', (done) => {
      const client = new woltlab.Client("https://forum-raspberrypi.de/forum");
      const res = client.getIndex().then((content) => {
        assert.notEqual(content, null);
        done();
      });
    });
  });
})
