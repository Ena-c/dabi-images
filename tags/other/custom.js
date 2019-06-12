const requestHandler = require("../handler");
class CustomShit {
    /**
     * @param {string} site Website url
     * @param {string} regex What to look for in the website contents (Regex)
     */
    do(site, regex) {
        return requestHandler.makeRequest("other", site, regex);
    }
}
module.exports = new CustomShit();