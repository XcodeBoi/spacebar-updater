const { exec } = require('child_process');
let names = ["Harri", "Willem", "Liam", "Hamish", "Minh-Quanieeeeee", "Alia"];
let selection2 = ["balls", "nutsack"]
let randIndex = Math.floor(Math.random() * names.length);
console.log("Good day, " + names[randIndex])
exec(`./spacebar-contact ${names[randIndex]}`)
// haha error checking is for plebs
// man this code is shit
