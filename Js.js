let bodyEl = document.getElementById("body")
let colorEl = document.getElementById("color")
let textEl = document.getElementById("text")
let inputEl = document.getElementById("textinput")

bodyEl.addEventListener("change", changeColor)
inputEl.addEventListener("input", changeText)

function changeColor(e){ 
    console.log(colorEl.value)
    let colorChange = colorEl.value
    
    if (CSS.supports('color', colorChange)){
        // colorEl.style.color = "white"
        bodyEl.style.backgroundColor = colorChange;
    }
    else{
        colorEl.style.color = "White"
    }
}

let scrollEl = document.getElementById ("scrollMenu")

function changeText() {
    let textChange = inputEl.value;
    textEl.innerText = textChange;
}

let insertText = prompt("Hello, put in some text please")

let divEl = document.createElement ("div")
document.body.appendChild (divEl)
let avsnittEl = document.createElement ("p")
avsnittEl.innerHTML = "This is your text " + insertText
divEl.appendChild(avsnittEl)
divEl.innerHTML += "<h3> This is a text element created with Javascript </h3>"


scrollEl.addEventListener("change", changeTextTag);

function changeTextTag() {
    let selectedTag = scrollEl.value;

    let newEl = document.createElement(selectedTag)
    newEl.id = "text"
    newEl.innerText = textEl.innerText;

    textEl.replaceWith(newEl)

    textEl = newEl
}