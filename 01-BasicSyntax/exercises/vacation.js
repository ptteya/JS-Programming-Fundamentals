function solve(peopleNum, groupType, day) {

    let totalPrice = 0;

    if (groupType === 'Students') {

        switch (day) {
            case 'Friday':
                totalPrice = 8.45 * peopleNum;
                break;
            case 'Saturday':
                totalPrice = 9.80 * peopleNum;
                break;
            case 'Sunday':
                totalPrice = 10.46 * peopleNum;
                break;
        }

        if (peopleNum >= 30) {
            totalPrice *= 0.85;
        }

    } else if (groupType === 'Business') {

        if (peopleNum >= 100) {
            switch (day) {
                case 'Friday':
                    totalPrice = 10.90 * (peopleNum - 10);
                    break;
                case 'Saturday':
                    totalPrice = 15.60 * (peopleNum - 10);
                    break;
                case 'Sunday':
                    totalPrice = 16 * (peopleNum - 10);
                    break;
            }
        } else {
            switch (day) {
                case 'Friday':
                    totalPrice = 10.90 * peopleNum;
                    break;
                case 'Saturday':
                    totalPrice = 15.60 * peopleNum;
                    break;
                case 'Sunday':
                    totalPrice = 16 * peopleNum;
                    break;
            }
        }
    } else if (groupType === 'Regular') {
        switch (day) {
            case 'Friday':
                totalPrice = 15 * peopleNum;
                break;
            case 'Saturday':
                totalPrice = 20 * peopleNum;
                break;
            case 'Sunday':
                totalPrice = 22.50 * peopleNum;
                break;
        }

        if (peopleNum >= 10 && peopleNum <= 20) {
            totalPrice *= 0.95;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(40, "Regular", "Saturday");