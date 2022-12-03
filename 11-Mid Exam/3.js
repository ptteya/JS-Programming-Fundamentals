function phoneShop(input) {
    let arr = input.slice(0);
    let phoneList = arr.shift().split(", ");
    let nextLine = arr.shift();

    while (nextLine !== "End") {
        let commandArr = nextLine.split(" - ");
        let command = commandArr.shift();
        let phone = commandArr[0];
        let phoneIndex;

        switch (command) {
            case "Add":
                if (!phoneExists(phone)) {
                    phoneList.push(phone);
                }
                break;
            case "Remove":
                if (phoneExists(phone)) {
                    phoneIndex = phoneList.indexOf(phone);
                    phoneList.splice(phoneIndex, 1);
                }
                break;
            case "Bonus phone":
                let [oldPhone, newPhone] = phone.split(":");
                if (phoneExists(oldPhone)) {
                    phoneIndex = phoneList.indexOf(oldPhone);
                    phoneList.splice(phoneIndex + 1, 0, newPhone);
                }
                break;
            case "Last":
                if (phoneExists(phone)) {
                    phoneIndex = phoneList.indexOf(phone);
                    let phoneToAdd = phoneList.splice(phoneIndex, 1);
                    phoneList.push(phoneToAdd);
                }
                break;
        }
        nextLine = arr.shift();
    }

    console.log(phoneList.join(", "));

    function phoneExists(phone) {
        if (phoneList.includes(phone)) {
            return true;
        }
        return false;
    }
}
phoneShop([
    "SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"
]);
