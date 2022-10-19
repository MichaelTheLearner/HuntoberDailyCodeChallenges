const getAverage = (arr) => {
    return Math.floor(arr.reduce((x, total) => total + x, 0)/arr.length)
}