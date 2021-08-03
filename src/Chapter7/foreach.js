// Testing forEach
let letters = [..."Hello World"];

let upperCase = "";

letters.forEach(letter => {
    upperCase += letter.toUpperCase();
})

console.log(upperCase);
