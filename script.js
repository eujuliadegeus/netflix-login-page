let button = document.getElementById("netflix-bottom")
let menu = document.getElementById("menu-answer")
let plus = document.getElementById("plus-netflix")


function menuFunction(){
    if(menu.style.display == "none"){
    menu.style.display = "block"
    plus.id = "plus-netflix-rotate"
    } else {
        menu.style.display = "none"
        plus.id = "plus-netflix"}
}

button.addEventListener("click", menuFunction)