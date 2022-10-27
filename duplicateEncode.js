function duplicateEncode(word){
    return word.toLowerCase().split('').map((x,i,a) => a.indexOf(x) === a.lastIndexOf(x) ? '(' : ')' ).join('')
}
