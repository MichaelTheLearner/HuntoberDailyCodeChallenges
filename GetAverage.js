const getAverage = (arr) => {
    return Math.floor(arr.reduce((x, total) => total + x, 0)/arr.length)
}

console.log(getAverage([1,2,3,4,5]))