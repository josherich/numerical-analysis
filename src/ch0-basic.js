// nest
var nest = function(d, c, x, b) {
  if (b === undefined) {
    b = zeros(d + 1);
  }
  var ret = c[d];
  while(d--) {
    ret = ret * (x - b[d]) + c[d];
  }
  return ret;
};

var zeros = function(n) {
  var ret = [];
  while(n--) {
    ret.push(0);
  }
  return ret;
};

var Deci2Binary = function(n) {
  if (typeof n !== 'number') {
    throw('input should be number');
  }
  return n.toString(2);
};


var Binary2Deci = function(b) {
  if (typeof b !== 'string') {
    throw('input should be string');
  }
  return parseInt(b, 2);
};

console.assert(nest(4, [-1, 5, -3, 3, 2], 1/2, [0, 0, 0, 0, 0]) === 1.25);

console.assert(zeros(10).length === 10);

console.assert(Deci2Binary(256) === '100000000');
console.assert(Deci2Binary(0.6875) === '0.1011');

console.assert(Binary2Deci('100000000') === 256);

