function computerPlay() {
    let guess = Math.ceil(Math.random() * 3);
    switch (guess) {
        case 1:
            return "Carta";
        case 2:
            return "Forbice";
        case 3:
            return "Sasso";
    }
}

function round(playerSelection, cpuSelection) {
    if (playerSelection.toUpperCase() === cpuSelection.toUpperCase()) {
        return 0;
    } else if ((playerSelection.toUpperCase() === "CARTA" && cpuSelection === "Sasso") || (playerSelection.toUpperCase() === "FORBICE" && cpuSelection === "Carta") || (playerSelection.toUpperCase() === "SASSO" && cpuSelection === "Forbice"))
        return 1;
    else
        return 2;
}

function game() {
    let counterPlayer = 0;
    let counterCPU = 0;
    for (let i = 1; i <= 5;) {
        let scelta = prompt(`Round ${i}. Scelta.`);
        let risultato = round(scelta, computerPlay());
        if (risultato === 0);
        else if (risultato === 1) {
            counterPlayer++;
            i++;
        } else if (risultato === 2) {
            counterCPU++;
            i++;
        }
    }

    if (counterPlayer > counterCPU) {
        return `Giocatore vince. ${counterPlayer} - ${counterCPU}`
    } else
        return `Computer vince. ${counterPlayer} - ${counterCPU}`
}