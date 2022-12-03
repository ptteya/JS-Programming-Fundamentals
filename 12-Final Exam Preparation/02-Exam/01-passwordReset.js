function passwordReset(input) {
    let password = input.shift();

    let commands = {
        "TakeOdd": function (password) {
            return [...password].filter((chr, index) => index % 2 !== 0).join("");
        },

        "Cut": function (password, index, length) {
            index = +index;
            length = +length;
            let substr = password.substring(index, index + length);
            return password.replace(substr, "");
        },
        "Substitute": function (password, substring, substitute) {
            if (password.includes(substring)) {
                return password.replace(new RegExp(substring, "g"), substitute);
            }
            console.log("Nothing to replace!");
            return password;
        }
    }

    input.forEach(entry => {
        let [command, ...tokens] = entry.split(" ");
        if (command !== "Done") {
            let oldPassword = password
            password = commands[command](password, ...tokens);
            if (oldPassword !== password) {
                console.log(password);
            }
        }
    })

    console.log(`Your password is: ${password}`);
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);


//another solution
// function passwordReset(input) {
//     let str = input.shift();
//     let command = input.shift();

//     while (command !== "Done") {
//         if (command.includes("TakeOdd")) {
//             let newPass = "";

//             for (let i = 0; i < str.length; i++) {
//                 if (i % 2 !== 0) {
//                     newPass += str[i];
//                 }
//             }
//             str = newPass;
//             console.log(newPass);
//         } else if (command.includes("Cut")) {
//             let commandArr = command.split(" ");
//             let index = Number(commandArr[1]);
//             let length = Number(commandArr[2]);


//             let endIndex = index + length;
//             let substring = str.substring(index, endIndex);
//             str = str.replace(substring, "");
//             console.log(str);

//         } else if (command.includes("Substitute")) {
//             let commandArr = command.split(" ");
//             let substring = commandArr[1];
//             let substitute = commandArr[2];

//             if (str.includes(substring)) {
//                 while (str.includes(substring)) {
//                     str = str.replace(substring, substitute)
//                 }
//                 console.log(str);
//             } else {
//                 console.log("Nothing to replace!");
//             }
//         }
//         command = input.shift();
//     }

//     console.log(`Your password is: ${str}`);
// }
// passwordReset([
//     "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"
// ]);
