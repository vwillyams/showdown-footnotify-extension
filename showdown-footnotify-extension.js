/*
 *  Showdown Footnotify extension
 *  https://github.com/vwillyams/showdown-footnotify-extension
 *  2015, Victor Willyams
 *  License: MIT
 */
(function() {

  var footnotify = function () {
    var footnoteArray = {};
    var idx = 1;

    return [
      {
        type:    'lang',
        regex:   '\\[(\\^)\\]\\(([^\\r\\n\\)]*)\\)',
        replace: function (match, link, linkText) {
          var thisIdx;
          var indexingLink = linkText.toLowerCase();
          if(!footnoteArray[indexingLink]){
            footnoteArray[indexingLink] = idx;
            thisIdx = idx;
            idx += 1;
          } else {
            thisIdx = footnoteArray[indexingLink];
          }
          return '[<sup>' + thisIdx + '</sup>][' + linkText + ']';
        }
      }
    ];
  };

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) {
    window.Showdown.extensions.footnotify = footnotify;
  }

  // Server-side export
  if (typeof module !== 'undefined') {
    module.exports = {
      footnotify : footnotify(),
    };
  }
})();
