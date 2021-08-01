const { exec } = require('child_process');
let names = ["Ted", "Harri", "Willem", "Liam", "Hamish", "Minh-Quanieeeeee", "Alia", "Adelaide"];
let randIndex = Math.floor(Math.random() * names.length);
console.log("Good day, " + names[randIndex])
exec(`spacebar -m config left_shell_command "echo A good day to you, ${names[randIndex]}"`)
// haha error checking is for plebs
// man this code is shit

// unread message calculation

exec(`sqlite3 ~/Library/Messages/chat.db "select count(*) from message"`, (error, stdout) => {
    exec(`sqlite3 ./msg_count.db "insert into msg_stats (tracked) values (${stdout})"`)
})

