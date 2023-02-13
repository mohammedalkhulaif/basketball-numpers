let homescoreEl = document.getElementById("homescore")
let guestscoreEl = document.getElementById("guestscore")


let homescore = 0
let guestscore = 0 

function home1() {
    homescore += 1
    homescoreEl.textContent = homescore
    console.log(homescore)
}

function home2() {
    homescore += 2
    homescoreEl.textContent = homescore
    console.log(homescore)
}

function home3() {
    homescore += 3
    homescoreEl.textContent = homescore
    console.log(homescore)
}

function guest1() {
    guestscore += 1
    guestscoreEl.textContent = guestscore
    console.log(guestscore)
}

function guest2() {
    guestscore += 2
    guestscoreEl.textContent = guestscore
    console.log(guestscore)
}

function guest3() {
    guestscore += 3
    guestscoreEl.textContent = guestscore
    console.log(guestscore)
}

function newgame(){
    guestscore = 0
    homescore = 0
    guestscoreEl.textContent = guestscore
    homescoreEl.textContent = homescore

}

