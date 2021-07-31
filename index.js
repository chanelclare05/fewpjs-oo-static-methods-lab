class Formatter {
  static capitalize(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]+/g, '');
  }
  static titleize(str){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let arrayOfWords = str.split(' ')
    for (let i = 0; i <arrayOfWords.length; i++){
      if (i == 0){
        result.push(this.capitalize(arrayOfWords[i]))
      } else {
        if (exceptions.includes(arrayOfWords[i])){
          result.push(arrayOfWords[i])
        } else {
          result.push(this.capitalize(arrayOfWords[i]))
        }
      }
    }
    return result.join(' ');
  }
}

