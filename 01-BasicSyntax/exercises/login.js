function login(input) {
    let index = 0;
    let username = input[index];
    index++;

    let password = '';
    let counter = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        password = password + username[i];
    }

    for (let i = 1; i <= input.length - 1; i++) {
        let passwordTry = input[i];
        counter++;

        if (passwordTry === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (counter >= 4) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log("Incorrect password. Try again.");
            }
        }
    }
}

login(['Acer','login','go','let me in','recA']);
