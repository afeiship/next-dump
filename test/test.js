var nx = require('next-js-core2');
require('../src/next-dump');

test('nx.dump - object', function() {
  var obj1 = { name: 'fei' };
  var obj2 = { email: '1290657123@qq.com' };
  var obj3 = nx.mix(null, obj1, obj2);
  nx.dump(obj3);
});

test('nx.dump number/string', function() {
  var str1 = 'hello fei';
  var num1 = 1231;
  nx.dump(str1);
  nx.dump(num1);
});
