const cheerio = require("cheerio");
const request = require("request");
const {promisify} = require('util');

const requestAsync = promisify(request);

class Client {

  /**
   * Initialize Client class
   *
   * @param {String} base_url defines the base_url where the forum is accessible
   */
  constructor(base_url) {
    this.BASE_URL = base_url;
    this.indexContent = null;
  }

  /**
   * Fetch the forums index page
   *
   * @api private
   * @returns {Boolean}
   */
  fetchIndex() {
    request(`${this.BASE_URL}/`, (error, response, body) => {
      if(error) {
        throw new Error("An error occured: " + error);
        return false;
      }
      this.indexContent = body;
      return true;
    });
  }

  /**
   * Get the index page, raw
   *
   * @api public
   */
   getIndex() {
     return new Promise((resolve, reject) => {
       if(!this.indexContent) this.fetchIndex();
       resolve(this.indexContent);
     });
   }
}

module.exports = {
  Client
}
