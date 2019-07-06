/*!
 * name: next-dump
 * url: https://github.com/afeiship/next-dump
 * version: 1.0.0
 * date: 2019-07-06T05:20:55.651Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.dump = function(inTarget) {
    var isObj = typeof inTarget === 'object';
    if (isObj) {
      for (var key in inTarget) {
        var value = inTarget[key];
        console.log('[ key - value ]:', key, value);
      }
    } else {
      console.log('[ value ]:', inTarget);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.dump;
  }
})();

//# sourceMappingURL=next-dump.js.map
