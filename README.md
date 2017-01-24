# Chrome Extension Boilerplate
Fork this repo, clone down to a directory, and start messing around! Most of your HTML, CSS, or JavaScript instincts are applicable to extension development.

Here's how to change some of the default values:
* Injects `scripts.js` on any page within the [www.casey-reed.com](www.casey-reed.com) domain. To change that, alter the `"matches"` URL value in `manifest.json`.
* When the extension icon is clicked, `index.html` is loaded  with `app.js`
* Change `img/logo.png` to an image with the same dimensions `256px X 256px` to get rid of my cartoon face.
* There are no permissions declared in the `manifest.json` file. Check Google's specs [here](https://developer.chrome.com/extensions/declare_permissions) to add your own.