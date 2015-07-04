# Showdown internal link extension

[Showdown](https://github.com/showdownjs/showdown) extension that makes it easy to add citations to your markdown!

Syntax is \[^\](link name), this gets replaced with a standard \[1\]\[link name\] style link, which you then will
need to reference later on in your page like so:

\[link name\]:http://vwillyams.github.com/ "My Github page!"

The end result will look an awful lot like this[<sup>1</sup>][vwillyams]

[vwillyams]:http://vwillyams.github.com/ "My Github page!"

These links are indexed in order of appearance on the page, so you don't need to remember that you're citing item number 47 - just remember whatever shorthand name you chose to give your citation.

## Known Issues

- Currently I don't have an easy method of printing out the reference sheet. This is my top priority right now.

## Client-side

```html
<script src="/path/to/showdown/src/showdown.js"></script>
<script src="/path/to/showdown-footnotify-extension.js"></script>
```

```javascript
var converter = new showdown.Converter({extensions: ['footnotify']});
```
## Server-side (node)

```javascript
var showdown = require('showdown');
var linkFilter = require('../showdown-footnotify-filter');
var converter = new showdown.Converter({extensions: [footnotify]});
```