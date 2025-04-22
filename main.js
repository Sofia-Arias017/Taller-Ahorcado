const palabras = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "PYTHON",
    "PROGRAMACION",
    "ELEFANTE",
    "PERRO",
    "GATO",
    "COLOMBIA",
    "DESARROLLO",
    "TECLADO"
];

const teclado = document.getElementById("teclado");
const palabraDiv = document.getElementById("palabra");
const partes = document.querySelectorAll(".parte");
const btnReiniciar = document.getElementById("reiniciar");

let palabraSecreta = "";
let aciertos = 0;
let errores = 0;

function iniciarJuego() {
    // Limpiar elementos anteriores
    palabraDiv.replaceChildren();
    teclado.replaceChildren();
    errores = 0;
    aciertos = 0;
    partes.forEach(parte => parte.style.display = "none");

    // Seleccionar palabra aleatoria
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    console.log("Palabra:", palabraSecreta);

    // Crear spans para la palabra
    for (let letra of palabraSecreta) {
    const span = document.createElement("span");
    span.textContent = "_";
    span.classList.add("letra");
    palabraDiv.appendChild(span);
    }

    // Crear botones A–Z
    for (let i = 65; i <= 90; i++) {
    const letra = String.fromCharCode(i);
    const btn = document.createElement("button");
    btn.textContent = letra;
    btn.addEventListener("click", () => manejarLetra(letra, btn));
    teclado.appendChild(btn);
    }
}

function manejarLetra(letra, btn) {
    btn.disabled = true;
    let encontrado = false;

    [...palabraSecreta].forEach((l, i) => {
    if (l === letra) {
        palabraDiv.children[i].textContent = letra;
        aciertos++;
        encontrado = true;
    }
    });

    if (!encontrado) {
    partes[errores].style.display = "block";
    errores++;
    }

    if (aciertos === palabraSecreta.length) {
    setTimeout(() => alert("¡Ganaste! 🎉"), 100);
    } else if (errores === partes.length) {
    setTimeout(() => alert("Perdiste 😢 La palabra era: " + palabraSecreta), 100);
    }
}

btnReiniciar.addEventListener("click", iniciarJuego);

  // Iniciar al cargar
iniciarJuego();
