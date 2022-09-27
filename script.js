let time = new Date()
let deltatime = 0;

if(document.readyState === "complete" || document.readyState === "interactive"){ 
    setTimeout(init, 1)
}else {
    document.addEventListener("domcontentloaded" , init)
}
function init(){
    time = new date ()
    start()
    loop()
}

function loop () {
    deltatime = (new date () - time) / 1000
    time = new date ()
    update ()
    requestAnimationFrame (loop)
}

//logica del juego
let sueloy = 22
let vely = 0
let impulso = 900
let gravedad = 2500

let dinoposx = 42
let dinoposy = sueloy
let suelox = 0
let volecenario = 1280/3
let gamevel = 1
let puntaje = 1

let parado = false
let saltando = false

let contenedor
let dino
let textopuntaje
let suelo 
let gameover 




function start() {
    suelo = document.querySelector (".suelo")
    contenedor = document.querySelector(".contenedor")
    textopuntaje = document.querySelector(".puntaje")
    dino = document.querySelector(".dino")
}


