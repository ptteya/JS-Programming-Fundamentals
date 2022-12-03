function fancyBarcodes(input) {
    let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    let digitsPatter = /\d/g;
    let count = input.shift();

    for (let i = 0; i < count; i++) {
        let barcode = input[i];
        let validMatch = pattern.exec(barcode);

        if (validMatch) {
            let productGroup = "";
            if (digitsPatter.test(barcode)) {
                let match = barcode.match(digitsPatter);
                productGroup = match.join("");
            } else {
                productGroup = "00";
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
])