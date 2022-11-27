function passwordValidator(password) {
    let isValidLength = function (str) {
        let passwordLength = str.length
        if (passwordLength >= 6 && passwordLength <= 10) {
            return true;
        } else {
            return false;
        }
    }

    let hasOnlyDigitsAndNums = function (str) {
        return /^[A-Za-z0-9]*$/.test(str);
    }

    let hasAtLeastTwoDigits = function (str) {
        let digitsCount = 0;
        for (let i = 0; i < str.length; i++) {
            let currentCharCode = str[i].charCodeAt(0);
            if (currentCharCode >= 48 && currentCharCode <= 57) {
                digitsCount++;
            }
        }

        if (digitsCount >= 2) {
            return true;
        } else {
            return false;
        }
    }

    if (isValidLength(password) && hasOnlyDigitsAndNums(password) && hasAtLeastTwoDigits(password)) {
        console.log("Password is valid");
    }
    if (!isValidLength(password)) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!hasOnlyDigitsAndNums(password)) {
        console.log("Password must consist only of letters and digits");
    }
    if (!hasAtLeastTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
    }
}
passwordValidator('Pa$s$s');