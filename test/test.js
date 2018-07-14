const assert = require("assert");
const woltlab = require("./../index");

describe('Client', () => {
  describe('#getIndex()', () => {
    it('should not be empty', (done) => {
      let success = false;
      const client = new woltlab.Client('https://forum-raspberrypi.de/forum');
      const res = client.getIndex().then((content) => {
        if(content != null) success = true;
        assert.equal(success, true);
        done();
      });
    });
  });
})
