function destinationMapper(input) {
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;

    let destinations = [];
    let validMatch;
    while ((validMatch = pattern.exec(input)) !== null) {
        destinations.push(validMatch[2]);
    }

    let travelPoints = 0;

    for (let destination of destinations) {
        travelPoints += destination.length;
    }

    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`)
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");