// Ներածել տողերից բաղկացած միաչափ զանգված։ 
// Բոլոր տողերում տառերը դարձնել մեծատառ։ Կարգավորել զանգվածը ըստ տողերում եղած 
// թվանշանների գումարի։ Արտածել ստացված զանգվածը։ Արտածվող զանգվածում կրկնվող տողեր պետք է չլինեն։


let input = prompt("Enter strings with commas.");
let strings = input.split(",")

let uniqueStrings = [...new Set(strings.map(str => str.toUpperCase().trim()))]

function sumDigits(str) {
    let sum = 0;
    for (let char of str) {
        if (!isNaN(char)) { 
            sum += Number(char);
        }
    }
    return sum;
}

uniqueStrings.sort((a, b) => sumDigits(a) - sumDigits(b))

alert(uniqueStrings)