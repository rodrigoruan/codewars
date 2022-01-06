class RomanNumerals {  
  static toRoman(num) {
    let lookup = { M:1000, CM:900, D:500, CD:400, C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    const keys = Object.keys(lookup);
    let roman = '';
    for(let i = 0; i < keys.length;) {
      if(num >= lookup[keys[i]]) {
        roman += keys[i];
        num -= lookup[keys[i]];
      } else i++;
    }
    return roman;
  }
  
  static fromRoman(str) {
    const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let num = 0;
    for (let i = 0; i < str.length; i++) {
      const curr = roman[str[i]];
      const next = roman[str[i + 1]];
      if(curr < next) (num -= curr)
      else (num += curr);
    }
    return num;
  }
}