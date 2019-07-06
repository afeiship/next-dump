/*!
 * name: next-dump
 * url: https://github.com/afeiship/next-dump
 * version: 1.0.0
 * date: 2019-07-06T15:40:04.455Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var chalk = require('chalk');

  nx.dump = function(inTarget, inOnlyKey) {
    var isObj = typeof inTarget === 'object';
    var onlyKey = inOnlyKey || false;
    if (isObj) {
      for (var key in inTarget) {
        var value = inTarget[key];
        if (onlyKey) {
          console.log(chalk.magenta('[ key ]:'), chalk.green(key));
        } else {
          console.log(chalk.magenta('[ key - value ]:'), chalk.green(key, value));
        }
      }
    } else {
      console.log(chalk.magenta('[ value ]:', chalk.green(inTarget)));
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.dump;
  }
})();

//# sourceMappingURL=next-dump.js.map
