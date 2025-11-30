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
let doubleclickError = document.getElementById("doubleclick-error");
let persecondError = document.getElementById("persecond-error");
let tenpersecondBtn = document.getElementById("10persecond-btn");
let tenpersecondError = document.getElementById("10persecond-error");
let hundredpersecondBtn = document.getElementById("100persecond-btn");
let hundredpersecondError = document.getElementById("100persecond-error");
let thanksgivingBtn = document.getElementById("thanksgiving-btn");
let nextupgradeLabel = document.getElementById("nextupgrade");
let viewupgradeLabel = document.getElementById("viewupgrade");
let thumbsUp = document.getElementById("thumbsup");
let Days = document.getElementById("days");
let nextUpgrade = document.getElementById("next-upgrade");
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
    setInterval(() => {
        if (count > 9999) {
            if (thanksgivingBtn.hidden) {
                thanksgivingBtn.hidden = false;
            }
        }
    }, 1000);
}
niceBtn.addEventListener("click", nice);



function upgradeshow1(event) {
    if (count > 19) {
        if (doubleclickBtn.hidden) {
            doubleclickBtn.hidden = false;
        }

    }
}

function upgradeshow2(event) {
    if (count > 99) {
        if (persecond.hidden) {
            persecond.hidden = false;
        }

    }
}

function upgradeshow3(event) {
    if (count > 499) {
        if (tenpersecondBtn.hidden) {
            tenpersecondBtn.hidden = false;
        }
    }
}
function upgradeshow4(event) {
    if (count > 999) {
        if (hundredpersecondBtn.hidden) {
            hundredpersecondBtn.hidden = false;
        }
    }
}

function doubleclicks(event) {
    if (count > 19) {

        setTimeout(() => {
            count -= 20;
            People.textContent = count;
        }, 0);
        setInterval(() => {
            doubleclickError.textContent = "";
            if (count > 9999) {
                if (thanksgivingBtn.hidden) {
                    thanksgivingBtn.hidden = false;
                }
            }
        }, 1000);
        extraclick += 1;
    }
    else if (count < 20) {
        doubleclickError.textContent = "You don't have enough smiles to buy this upgrade!";
    }
}

function letterpersecond(event) {
    if (count > 99) {
        setTimeout(() => {
            count -= 100;
            extrapersecond += 1;
        }, 0);
        setInterval(() => {
            count += extrapersecond;
            People.textContent = count;
            persecondError.textContent = "";
            if (count > 9999) {
                if (thanksgivingBtn.hidden) {
                    thanksgivingBtn.hidden = false;
                }
            }
        }, 1000);
    } else if (count < 100) {
        persecondError.textContent = "You don't have enough smiles to buy this upgrade!";
    }
}
function tenpersecond(event) {
    if (count > 499) {
        setTimeout(() => {
            count -= 500;
            extrapersecond += 10;
        }, 0);
        setInterval(() => {
            count += extrapersecond;
            People.textContent = count;
            tenpersecondError.textContent = "";
            if (count > 9999) {
                if (thanksgivingBtn.hidden) {
                    thanksgivingBtn.hidden = false;
                }
            }
        }, 1000);
    } else if (count < 500) {
        tenpersecondError.textContent = "You don't have enough smiles to buy this upgrade!";
    }
}
function hundredpersecond(event) {
    if (count > 999) {
        setTimeout(() => {
            count -= 1000;
            extrapersecond += 100;
        }, 0);
        setInterval(() => {
            count += extrapersecond;
            People.textContent = count;
            hundredpersecondError.textContent = "";
            if (count > 9999) {
                if (thanksgivingBtn.hidden) {
                    thanksgivingBtn.hidden = false;
                }
            }
        }, 1000);
    } else if (count < 1000) {
        hundredpersecondError.textContent = "You don't have enough smiles to buy this upgrade!";
    }

}
function thanksgiving(event) {
    if (count > 9999) {
        count.hidden = true;
        doubleclickBtn.hidden = true;
        persecond.hidden = true;
        tenpersecondBtn.hidden = true;
        hundredpersecondBtn.hidden = true;
        thanksgivingBtn.hidden = true;
        niceBtn.hidden = true;
        nextupgradeLabel.textContent = "";
        viewupgradeLabel.textContent = "you have spread so much kindness today! thank you!";
        extrapersecond = 0;
        count = 0;
        People.hidden = true;
        sad.hidden = true;
        happy.hidden = true;
        thumbsUp.hidden = false;
        Days.hidden = true;

    }
}

function nextupgrade(event) {
    if (count < 20) {
        nextUpgrade.textContent = "20 clicks";
    } else if (count >= 20) {
        if (count < 100) {
            nextUpgrade.textContent = "100 clicks";
        }
    }

}
function nextupgrade2(event) {
    if (count >= 100) {
        if (count < 500) {
            nextUpgrade.textContent = "500 clicks";
        }
    }
}
function nextupgrade3(event) {
    if (count >= 500) {
        if (count < 1000) {
            nextUpgrade.textContent = "1000 clicks";
        }
    }
}
function nextupgrade4(event) {
    if (count >= 1000) {
        if (count < 10000) {
            nextUpgrade.textContent = "10,000 clicks";
        }
    }
}
niceBtn.addEventListener("click", nextupgrade3);
niceBtn.addEventListener("click", nextupgrade2);
niceBtn.addEventListener("click", nextupgrade);
niceBtn.addEventListener("click", upgradeshow1);
niceBtn.addEventListener("click", upgradeshow2);
niceBtn.addEventListener("click", upgradeshow3);
niceBtn.addEventListener("click", upgradeshow4);
thanksgivingBtn.addEventListener("click", thanksgiving);
doubleclickBtn.addEventListener("click", doubleclicks);
persecond.addEventListener("click", letterpersecond);
tenpersecondBtn.addEventListener("click", tenpersecond);
hundredpersecondBtn.addEventListener("click", hundredpersecond);