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
        return "Pareggio";
    }
    else if ((playerSelection.toUpperCase() === "CARTA" && cpuSelection === "Sasso") || (playerSelection.toUpperCase() === "FORBICE" && cpuSelection === "Carta") || (playerSelection.toUpperCase() === "SASSO" && cpuSelection === "Forbice"))
        return `Giocatore vince. ${playerSelection} batte ${cpuSelection}!`;
    else
        return `Computer vince. ${cpuSelection} batte ${playerSelection}!`;
}

let scelta = prompt("Scelta");

console.log(round(scelta, computerPlay()));
