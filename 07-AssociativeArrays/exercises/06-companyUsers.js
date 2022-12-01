function companyUsers(input) {
    let usersInCompany = {};

    for (let user of input) {
        let [company, id] = user.split(" -> ");

        if (usersInCompany.hasOwnProperty(company) && !usersInCompany[company].includes(id)) {
            usersInCompany[company].push(id);
        } else if (!usersInCompany.hasOwnProperty(company)) {
            usersInCompany[company] = [id];
        }
    }

    let entries = Object.entries(usersInCompany);
    let sortedCompanies = entries.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (let el of sortedCompanies) {
        console.log(el[0]);
        for (let userId of el[1]) {
            console.log(`-- ${userId}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);