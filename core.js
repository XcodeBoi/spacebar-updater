const { exec } = require('child_process');
let names = ["Harri", "Willem", "Liam", "Hamish", "Minh-Quanieeeeee", "Alia", "adelaide"];
let selection2 = ["balls", "nutsack"]
let randIndex = Math.floor(Math.random() * names.length);
console.log("Good day, " + names[randIndex])
exec(`spacebar -m config left_shell_command "echo A good day to you, ${names[randIndex]}"`)
// haha error checking is for plebs
// man this code is shit
