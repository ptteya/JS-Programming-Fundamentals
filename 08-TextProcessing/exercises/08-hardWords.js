function hardWords(input) {
    let text = input[0];
    let words = input[1];

    let underscores = "";

    for (let i = 0; i < text.length; i++) {
        let chr = text[i];

        if (chr === "_") {
            underscores += chr;
            if (text[i + 1] !== "_") {
                for (let word of words) {
                    if (underscores.length === word.length) {
                        text = text.replace(underscores, word);
                        underscores = "";
                        break;
                    }
                }
            }
        }
    }

    console.log(text);
}
hardWords([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]);