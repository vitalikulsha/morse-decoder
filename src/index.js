const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

/*function decode(expr) {
    let strArr = [];
    for(let i = 0; i < expr.length; i +=10){
      strArr.push(expr.slice(i, i+10)
                  .replace('10', '.')
                  .replace('11', '-')
                  .replace('0', ''));
    }  
    return strArr.map(x => x ===  '**********'? ' ' : MORSE_TABLE[x]).join(''); 
}

module.exports = {
    decode
}*/
module.exports = function decode(expr){
    let strArr = [];
    for(let i = 0; i < expr.length; i +=10){
      strArr.push(expr.slice(i, i+10)
                  .replace('10', '.')
                  .replace('11', '-')
                  .replace('0', ''));
    }  
    return strArr.map(x => x ===  '**********'? ' ' : MORSE_TABLE[x]).join(''); 
}
