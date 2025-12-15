
let fontSize = 16;
let ballonEl = document.getElementById("ballon");
let inflateButton = document.getElementById("inflate-button");
let deflateButton = document.getElementById("deflate-button");
let newBallon = document.getElementById("new-button");

function inflate() {
    fontSize *= 1.1;
    ballonEl.style.fontSize = fontSize + "px";
    if (fontSize > 99) {
        ballonEl.textContent = "💥";
        inflateButton.removeEventListener("click", inflate);
        deflateButton.removeEventListener("click", Deflate);
    }
}




function Deflate() {
    fontSize /= 1.1;
    ballonEl.style.fontSize = fontSize + "px";

}

function Ballon() {
    inflateButton.addEventListener("click", inflate);
    deflateButton.addEventListener("click", Deflate);

    ballonEl.textContent = "🎈";
    fontSize = 16
    ballonEl.style.fontSize = 16 + "px";
    
}

inflateButton.addEventListener("click", inflate);
deflateButton.addEventListener("click", Deflate);
newBallon.addEventListener("click", Ballon);


