
let hScore = document.getElementById("h-score")

let gScore = document.getElementById("g-score")

let homeCount = 0

let guestCount = 0

function hIncrementone() {
    homeCount += 1
    hScore.textContent = homeCount
}
function hIncrementtwo() {
    homeCount += 2
    hScore.textContent = homeCount
}
function hIncrementthree() {
    homeCount += 3
    hScore.textContent = homeCount
}

function gIncrementone() {
    guestCount += 1
    gScore.textContent = guestCount
}
function gIncrementtwo() {
    guestCount += 2
    gScore.textContent = guestCount
}
function gIncrementthree() {
    guestCount += 3
    gScore.textContent = guestCount
}