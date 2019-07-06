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
