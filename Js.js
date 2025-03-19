let bodyEl = document.getElementById("body");
let colorEl = document.getElementById("color");
let textEl = document.getElementById("text");
let inputEl = document.getElementById("textinput");

bodyEl.addEventListener("change", changeColor);
inputEl.addEventListener("input", changeText);

function changeColor(e){ 
    console.log(colorEl.value);
    let colorChange = colorEl.value;
    
    if (CSS.supports('color', colorChange)){
        colorEl.style.color = "white";
        bodyEl.style.backgroundColor = colorChange;
    }
    else{
        colorEl.style.color = "White";
    }

}   

function changeText() {
    let textChange = inputEl.value;
    textEl.innerText = textChange;
}

// Refrance
// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);

// const element = document.getElementById("div1");
// element.appendChild(para);