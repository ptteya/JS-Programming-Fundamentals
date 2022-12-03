function stringManipulator(input) {
    let str = input.shift();
    let line = input.shift();

    let commandsObj = {
        Translate(str, chr, replacement) {
            return str.replace(new RegExp(chr, 'g'), replacement);
        },
        Includes(str, substr) {
            if (str.includes(substr)) {
                return 'True';
            }
            return 'False';
        },
        Start(str, substr) {
            if (str.startsWith(substr)) {
                return 'True';
            }
            return 'False';
        },
        Lowercase(str) {
            return str.toLowerCase();
        },
        FindIndex(str, chr) {
            return str.lastIndexOf(chr);
        },
        Remove(str, startIndex, count) {
            startIndex = Number(startIndex);
            count = Number(count);

            let stringToRemove = str.substring(startIndex, startIndex + count);

            return str.replace(stringToRemove, '');
        },
    }

    let result;

    while (line !== 'End') {
        let [command, ...tokens] = line.split(' ');

        switch (command) {
            case 'Translate':
                str = commandsObj[command](str, ...tokens);
                console.log(str);
                break;
            case 'Includes':
                result = commandsObj[command](str, ...tokens);
                console.log(result);
                break;
            case 'Start':
                result = commandsObj[command](str, ...tokens);
                console.log(result);
                break;
            case 'Lowercase':
                str = commandsObj[command](str);
                console.log(str);
                break;
            case 'FindIndex':
                result = result = commandsObj[command](str, ...tokens);
                console.log(result);
                break;
            case 'Remove':
                str = commandsObj[command](str, ...tokens);
                console.log(str);
                break;
        }
        line = input.shift();
    }
}

stringManipulator([
    "//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"
])

stringManipulator([
    "*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"
]);


//another solution
// function stringManipulator(input) {
//     let str = input.shift();
//     let line = input.shift();

//     while (line !== 'End') {
//         let [command, ...tokens] = line.split(' ');

//         if (command === 'Translate') {
//             let chr = tokens[0];
//             let replacement = tokens[1];

//             str = str.replace(new RegExp(chr, 'g'), replacement);

//             console.log(str);
//         } else if (command === 'Includes') {
//             let substr = tokens[0];

//             if (str.includes(substr)) {
//                 console.log('True');
//             } else {
//                 console.log('False');
//             }

//         } else if (command === 'Start') {
//             let substr = tokens[0];
//             if (str.startsWith(substr)) {
//                 console.log('True');
//             } else {
//                 console.log('False');
//             }
//         } else if (command === 'Lowercase') {
//             str = str.toLowerCase();
//             console.log(str);
//         } else if (command === 'FindIndex') {
//             let chr = tokens[0];
//             let index = str.lastIndexOf(chr);
//             console.log(index);
//         } else if (command === 'Remove') {
//             let startIndex = Number(tokens[0]);
//             let count = Number(tokens[1]);

//             let stringToRemove = str.substring(startIndex, startIndex + count);
//             str = str.replace(stringToRemove, '');

//             console.log(str);
//         }

//         line = input.shift();
//     }
// }
