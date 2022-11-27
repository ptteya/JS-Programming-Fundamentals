function tseamAccount(input) {
    let account = input.shift().split(" ");
    let command = input.shift();

    while (command !== "Play!") {
        let [action, game] = command.split(" ");
        let includeGame = account.includes(game);

        if (action === "Install") {
            if (!includeGame) {
                account.push(game);
            }
        } else if (action === "Uninstall") {
            if (includeGame) {
                index = account.indexOf(game);
                account.splice(index, 1);
            }
        } else if (action === "Update") {
            if (includeGame) {
                index = account.indexOf(game);
                account.splice(index, 1);
                account.push(game);
            }
        } else if (action === "Expansion") {
            let [nameOfGame, expansion] = game.split("-");
            if (account.includes(nameOfGame)) {
                index = account.indexOf(nameOfGame);
                account.splice(index + 1, 0, `${nameOfGame}:${expansion}`);
            }
        }
        command = input.shift();
    }
    console.log(account.join(' '));
}

tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);