/*!
 * name: next-dump
 * url: https://github.com/afeiship/next-dump
 * version: 1.0.0
 * date: 2019-07-06T05:11:18.552Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_CALLBACK = function(key, value) {
    console.log('[ key - value ]:', key, value);
  };

  nx.dump = function(inTarget, inCallback) {
    var callback = inCallback || DEFAULT_CALLBACK;
    for (var key in inTarget) {
      var value = inTarget[key];
      callback(key, value, inTarget);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.dump;
  }
})();

//# sourceMappingURL=next-dump.js.map
