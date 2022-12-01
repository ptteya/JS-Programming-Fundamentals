function arenaTier(input) {
    let line = input.shift();
    let tier = {};

    while (line !== 'Ave Cesar') {
        if (line.includes('->')) {
            let [gladiator, technique, skill] = line.split(" -> ");
            skill = Number(skill);

            if (!tier.hasOwnProperty(gladiator)) {
                tier[gladiator] = { totalSkills: 0 };
            }

            if (!tier[gladiator].hasOwnProperty(technique)) {
                tier[gladiator].totalSkills += skill;
                tier[gladiator][technique] = skill;
            } else {
                if (tier[gladiator][technique] < skill) {
                    let skillToAdd = skill - tier[gladiator][technique];
                    tier[gladiator][technique] = skill;
                    tier[gladiator].totalSkills += skillToAdd;
                }
            }

        } else {
            let [firstGladiator, secondGladiator] = line.split(' vs ');

            if (tier.hasOwnProperty(firstGladiator) && tier.hasOwnProperty(secondGladiator)) {
                let firstGladiatorKeys = Object.keys(tier[firstGladiator]);
                let secondGladiatorKeys = Object.keys(tier[secondGladiator]);

                for (let key of firstGladiatorKeys) {
                    if (key !== 'totalSkills' && secondGladiatorKeys.includes(key)) {
                        let firstPoints = tier[firstGladiator][key];
                        let secondPoints = tier[secondGladiator][key]

                        if (firstPoints > secondPoints) {
                            delete tier[secondGladiator];
                        } else {
                            delete tier[firstGladiator];
                        }
                    }
                }
            }
        }
        line = input.shift();
    }

    let sorted = Object.entries(tier).sort((a, b) => b[1].totalSkills - a[1].totalSkills);



    for (let [gladiator, techniqueInfo] of sorted) {
        console.log(`${gladiator}: ${techniqueInfo.totalSkills} skill`);
        delete techniqueInfo.totalSkills;

        let entries = Object.entries(techniqueInfo);
        entries.sort((a, b) => a[0].localeCompare(b[0]));
        entries.sort((a, b) => b[1] - a[1]);

        for (let entry of entries) {
            console.log(`- ${entry[0]} <!> ${entry[1]}`);
        }
    }
}

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);
