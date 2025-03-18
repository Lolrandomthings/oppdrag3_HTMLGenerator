let bodyEl = document.getElementById("body");
let colorEl = document.getElementById("color");


bodyEl.addEventListener("change", changeColor);

function changeColor(e){ 
    console.log(colorEl.value);
    let change = colorEl.value;
    console.log(change);
    
    if (CSS.supports('color', change)){
        colorEl.style.color = "white";
        bodyEl.style.backgroundColor = change;
    }
    else{
        colorEl.style.color = "Red";
    }

}



// let buttonEl = document.getElementById("button")
// let inputEl = document.getElementById("input")

// buttonEl.addEventListener("click", byttFarge)
// function byttFarge(e){
//     console.log(inputEl.value)
//     let Hei = inputEl.value
//     if (CSS.supports('color', Hei)){
//         inputEl.style.color = "White"
//         buttonEl.style.backgroundColor = Hei
//     }
//     else{
//         inputEl.style.color = "Red"
//         inputEl.value = "* Skriv inn en gyldi verdi *"
//         inputEl.addEventListener("click", removetext)
//     }   
// }