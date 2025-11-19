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

darkMode.addEventListener("input", background);
lightMode.addEventListener("input", background);