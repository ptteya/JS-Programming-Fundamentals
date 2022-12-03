function matchFullName(names) {
    let regExp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validMatch;
    let validNames = [];

    while ((validMatch = regExp.exec(names)) !== null) {
        validNames.push(validMatch[0]);
    }
    console.log(validNames.join(" "));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")