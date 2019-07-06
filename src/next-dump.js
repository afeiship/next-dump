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
