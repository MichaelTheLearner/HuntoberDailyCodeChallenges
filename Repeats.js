const repeats = (arr) => {
    return arr.filter((x, i, ar) => arr.indexOf(x) === arr.lastIndexOf(x)).reduce((x,total) => total + x)
}
console.log(repeats([4,5,7,5,4,8]));