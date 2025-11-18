const Word1=document.getElementById("word1");
const Word2=document.getElementById("word2");
const Word3=document.getElementById("word3");
const Word4=document.getElementById("word4");
const wordOutput=document.getElementById("wordoutput");
const generateBtn=document.getElementById("generatebtn")
function generate(){
    wordOutput.textContent= Word2.value+" " + Word4.value+" " +Word3.value+" "+Word1.value
}
generateBtn.addEventListener("click", generate)