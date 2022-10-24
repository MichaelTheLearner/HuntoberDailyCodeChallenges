const repeats = (arr) => {
    return arr.filter((x, i, ar) => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((x,total) => total + x)
}
console.log(repeats([4,5,7,5,4,8]));
console.log(repeats([9, 10, 19, 13, 19, 13]));
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));
