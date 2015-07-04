# Showdown internal link extension

[Showdown](https://github.com/showdownjs/showdown) extension that makes it easy to add citations to your markdown!

Syntax is \[^\](link name), this gets replaced with a standard \[1\]\[link name\] style link, which you then will
need to reference later on in your page like so:

\[link name\]:http://vwillyams.github.com/ "My Github page!"

Then, you will need to add a place to display all your references, using the <references> tag.

These links are indexed in order of appearance on the page, so you don't need to remember that you're citing item number 47 - just remember whatever shorthand name you chose to give your citation.

Note that this plugin relies on anchor-scrolling, as such it will not work in Angular environments.

## Usage example

### Code
```
This is a reference[^](VWillyams Github)

References:
<references>
[VWillyams Github]: http://vwillyams.github.com/ "My Github page!"
```

### Results

This is a reference[<sup>1</sup>](#1)

References:
<a name="1">1</a>: [VWillyams Github][vwillyams]
[vwillyams]:http://www.github.com/vwillyams "My Github page!"

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