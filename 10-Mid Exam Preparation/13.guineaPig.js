function guineaPig(input) {
    let arr = input.slice(0).map(Number);
    let food = arr.shift();
    let hay = arr.shift();
    let cover = arr.shift();
    let weight = arr.shift();

    let foodInGrams = food * 1000;
    let hayInGrams = hay * 1000;
    let coverInGrams = cover * 1000;
    let weightInGrams = weight * 1000;
    let runOutOfFood = false;

    for (let i = 1; i <= 30; i++) {
        if (foodInGrams > 0) {
            foodInGrams -= 300;
        } else {
            runOutOfFood = true;
            break;
        }
        if (i % 2 === 0) {
            if (hayInGrams > 0) {
                hayInGrams -= foodInGrams * 0.05;
            } else {
                runOutOfFood = true;
                break;
            }
        }
        if (i % 3 === 0) {
            if (coverInGrams > 0) {
                coverInGrams -= weightInGrams / 3;
            } else {
                runOutOfFood = true;
                break;
            }
        }
    }

    let excessFood = (foodInGrams / 1000).toFixed(2);
    let excessHay = (hayInGrams / 1000).toFixed(2);
    let excessCover = (coverInGrams / 1000).toFixed(2);

    if (runOutOfFood || excessFood <= 0 || excessHay <= 0 || excessCover <= 0) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${excessFood}, Hay: ${excessHay}, Cover: ${excessCover}.`);
    }
}
guineaPig(["9", "5", "5.2", "1"]);
