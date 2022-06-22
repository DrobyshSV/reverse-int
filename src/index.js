module.exports = function reverse(n) {
    n = Math.abs(n);
    return +[...n.toString()].reverse().join("");
};
