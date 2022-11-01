const oppositeStrings = (str) => {
    return str.split(' ').reverse().join(' ').split('').map((x) => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')
}