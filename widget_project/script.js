const Word1 = document.getElementById("word1");
const Word2 = document.getElementById("word2");
const Word3 = document.getElementById("word3");
const Word4 = document.getElementById("word4");
const wordOutput = document.getElementById("wordoutput");
const generateBtn = document.getElementById("generatebtn");
function generate() {
    wordOutput.textContent = Word2.value + " " + Word4.value + " " + Word3.value + " " + Word1.value;
}
generateBtn.addEventListener("click", generate);

const darkMode = document.getElementById("dark-mode");
const lightMode = document.getElementById("light-mode");
const multiColor = document.getElementById("multicolor");

function background(event) {
    if (event.target.checked) {
        if (event.target.value == "light") {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
        else if (event.target.value == "dark") {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
    }

}
function custombackground() {
    document.body.style.backgroundColor = multiColor.value;

}



multiColor.addEventListener("input", custombackground);
darkMode.addEventListener("input", background);
lightMode.addEventListener("input", background);


let happy = document.getElementById("happyface");
let sad = document.getElementById("sadface");
let niceBtn = document.getElementById("nice-btn");
let People = document.getElementById("people");
let count = 0;
let persecond = document.getElementById("persecond-btn");
let doubleclickBtn = document.getElementById("doubleclick-btn");
let extraclick = 0;
let extrapersecond = 0;
let viewupgradeBtn = document.getElementById("viewupgrade-btn");
let doubleclickError = document.getElementById("doubleclick-error");
let persecondError = document.getElementById("persecond-error");
let viewupgradeError = document.getElementById("viewupgrade-error");
let upgradeOn1 = false;
let upgradeOn2 = false;
let upgradeOn3 = false;
let upgradeOn4 = false;
let upgradeOn5 = false;

function nice(event) {
    if (happy.hidden) {
        count += 1 + extraclick;
        People.textContent = count;
        happy.hidden = false;
        sad.hidden = true;
    }
    setTimeout(() => {
        sad.hidden = false;
        happy.hidden = true;
    }, 400);
}
niceBtn.addEventListener("click", nice);



function upgradeshow1(event) {
    if (count > 19) {
        if (doubleclickBtn.hidden) {
            doubleclickBtn.hidden = false;
        }
        upgradeOn1 = true;
    }
}

function upgradeshow2(event) {
    if (count > 99) {
        if (persecond.hidden) {
            persecond.hidden = false;
        }
        upgradeOn2 = true;
    }
}

function doubleclicks() {
    if (count > 19) {
        doubleclickError.textContent = "";
        setTimeout(() => {
            count -= 20;
            People.textContent = count;
        }, 0);
        extraclick += 1;
    }
    else if (count < 20) {
        doubleclickError.textContent = "You don't have enough score to buy this upgrade!";
    }
}

function letterpersecond(event) {
    if (count > 99) {
        setTimeout(() => {
            count -= 100;
            extrapersecond += 1;
        }, 0);
        setInterval(() => {
            count += 1 + extrapersecond;
            People.textContent = count;
        }, 1000);
    } else if (count < 100) {
        persecondError.textContent = "You don't have enough score to buy this upgrade!";
    }
}

function toggleUpgrades(event) {
    doubleclickError.textContent = "";
    persecondError.textContent = "";
    if (upgradeOn1 = true) {
        doubleclickBtn.hidden = true;
        upgradeOn1 = false;
    }

}
viewupgradeBtn.addEventListener("click", upgradeshow1);
viewupgradeBtn.addEventListener("click", upgradeshow2);
doubleclickBtn.addEventListener("click", doubleclicks);
persecond.addEventListener("click", letterpersecond);