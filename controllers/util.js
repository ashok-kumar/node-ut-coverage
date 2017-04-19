var add = function(a, b, callback) {
    callback(a+b);
};
var mul = function(a, b, callback) {
    callback(a*b);
};
module.exports = {
    add: add,
    mul: mul
};
