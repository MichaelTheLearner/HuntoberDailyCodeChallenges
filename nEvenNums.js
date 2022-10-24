const nEvenNums = (arr, num) => {    
    return arr.filter ((x) => x % 2 === 0).slice(-num)
}