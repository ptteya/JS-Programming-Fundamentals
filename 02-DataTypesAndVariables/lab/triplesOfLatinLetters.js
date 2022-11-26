function triplesOfLatinLetters(number){
    for (let first = 0; first < number; first++){
        let letter1 = String.fromCharCode(97+first);
        for (let second = 0; second < number; second++){
            let letter2 = String.fromCharCode(97+second);
            for (let third = 0; third < number; third++){
                let letter3 = String.fromCharCode(97+third);
                console.log(letter1+letter2+letter3);
            }
        }
    }
}
triplesOfLatinLetters(3)