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
let Letter = document.getElementById("letter")
function nice(event) {
    if (happy.hidden) {
        count += 1;
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

function letters(event){
    if(count>100){
        if(Letter.hidden){
            Letter.hidden=false;
        }
        else{
            setInterval(() => {
                count+=1
            }, 1000);
        }
    }
}
Letter.addEventListener("click", letters)