var equation1 = function(x) {
  return parseFloat(x);
};

var equation2 = function(x) {
  return parseFloat(x * x * x + x - 1);
};

var TOL = 100;

// given [a, b], f(a)f(b) < 0, solve root
var binary = function(f, a, b, u) {
  var n = 0;
  while ((b - a) / 2 < TOL) {
    var c = (b + a) / 2;
    if (Math.abs(f(c)) < u) {
      return [a, b, c, n];
    }
    if (f(a)*f(c) < 0) {
      b = c;
    } else {
      a = c;
    }
    n++;
  }
};

// range given, how many step do you need to achieve n digit accurary?
var step4digitn = function(a, b, n) {
  return Math.ceil(n / Math.log10(2 * Math.abs(b - a)));
};

console.log(binary(equation1, -10, 10, 0.1));
console.log(binary(equation2, 0, 1, 0.00005));

console.log(step4digitn(0, 1, 10));
