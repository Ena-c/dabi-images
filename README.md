
# dabi-images
grabs images

### Installation
```
npm install dabi-images
```

## How to use
```js
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();

// async/await
(async() => {
    let data = await DabiClient.nsfw.real.ass();
    console.log(data);
    // outputs a json object with image url and source
})();

// promises
DabiClient.nsfw.real.ass().then(data => {
    console.log(data);
    // outputs a json object with image url and source
});

```
### Real

| Tag | Description |
|:---:|:-----------:|
| ass | gets ass pictures from reddit |
| thighs | gets thigh pictures from reddit |
| panties | gets pictures of girls in panties from reddit |
| random | gets random nsfw pictures from reddit |

### Hentai

| Tag | Description |
|:---:|:-----------:|
| ass | gets ass pictures from danbooru |

### Change Log
* Added hentai with 1 tag ("ass")
* Added comments to handler.js
* Added a test file
* I republished like 5 times because of the stupid readme, versions 2.6.2 - 2.6.6 are the same

### Support
```
I don't have a github or a website setup; you can contact me through discord
Username: Ena 𓅓#1328
User ID: 557016624301867009