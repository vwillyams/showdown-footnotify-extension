/*
 *  Showdown Footnotify extension
 *  https://github.com/vwillyams/showdown-footnotify-extension
 *  2015, Victor Willyams
 *  License: MIT
 */
(function() {

  var footnotify = function () {
    // TODO should probably actually BE an array, I don't really need to store indexes or key off footnote names just for simpler lookup code
    var footnoteArray = {};
    var idx = 1;

    return [
      {
        type:    'lang',
        regex:   '\\[(\\^)\\]\\(([^\\r\\n\\#\\/\\"\\)]*)\\)',
        replace: function (match, link, linkText) {
          var thisIdx;
          if(!footnoteArray[linkText]){
            footnoteArray[linkText] = idx;
            thisIdx = idx;
            idx += 1;
          } else {
            thisIdx = footnoteArray[linkText];
          }
          return '[<sup>' + thisIdx + '</sup>](#' + thisIdx + ')';
        }
      },
      {
        type:    'lang',
        regex:   '<references>',
        replace: function (match) {
          var rtn = [];
          // TODO and here's where the obvious lazy array problem starts to bite...
          for(var i = 0; i < Object.keys(footnoteArray).length; i++){
            var linkText = Object.keys(footnoteArray)[i];
            rtn += "<a name="+ footnoteArray[linkText] + ">" + footnoteArray[linkText] + "</a>: [" + linkText + "][" + linkText + "] \n\n";
          }
          console.log(rtn);
          return rtn;
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
