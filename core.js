const { exec } = require('child_process');
let names = ["Harri", "Willem", "Liam", "Hamish", "Minh-Quanieeeeee"];
let randIndex = Math.floor(Math.random() * names.length);
console.log("Good day, " + names[randIndex])
exec(`spacebar -m config left_shell_command "echo A good day to you, ${ names[randIndex] }"`,
    (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error != null) {
            console.log(`exec error: ${error}`);
        }
    });

