

function decode(simbols) {
    
    let value = 0
    let result = ''
    
    simbols.split('').forEach(s => {
        if (s === '#') {
            value++
        } else if (s === '@') {
            value--
        } else if (s === '*') {
            value *= value
        } else if (s === '&') {
            result += value
        } 
    });

    return result
}


let simbols = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
console.log(decode(simbols));
