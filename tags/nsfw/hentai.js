const requestHandler = require("../handler");
class HentaiShit {
    ass() {
        let page = Math.floor(Math.random() *24) +1, url = `https://danbooru.donmai.us/posts?page=${page}&tags=ass+panties`;
        return requestHandler.makeRequest("danbooru", url);
    }
    thighs() {
        let page = Math.floor(Math.random() *24) +1, tags = ["thighs", "thighhighs", "black_legwear"], 
        url = `https://danbooru.donmai.us/posts?page=${page}&tags=${tags[Math.floor(Math.random() *tags.length)]}`;
        return requestHandler.makeRequest("danbooru", url);
    }
    panties() {
        let page = Math.floor(Math.random() *24) +1, tags = ["panties", "underwear", "black_panties", "white_panties", "pink_panties", "pantyshot", 
        "underwear_only", "side-tie_panties", "bow_panties"],
        url = `https://danbooru.donmai.us/posts?page=${page}&tags=${tags[Math.floor(Math.random() *tags.length)]}`;
        return requestHandler.makeRequest("danbooru", url);
    }
    feet() {
        let page = Math.floor(Math.random() *24) +1, tags = ["feet", "toes", "sole", "barefoot"],
        url = `https://danbooru.donmai.us/posts?page=${page}&tags=${tags[Math.floor(Math.random() *tags.length)]}`;
        return requestHandler.makeRequest("danbooru", url);
    }
}
module.exports = new HentaiShit();