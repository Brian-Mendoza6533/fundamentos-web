console.log("Mi nombre es: Brian Mendoza Salzar");

let boton = document.getElementById("miBoton");
boton.onclick = function() {
    let nombre = document.getElementById("nombre").value;
    alert("Hola " + nombre + ", bienvenido!");
}