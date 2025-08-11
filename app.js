// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

//Al añadir un amigo se agregará al array nombres y limpiará la entrada.
function agregarAmigo(){

    //1. Capturar nombre amigo secreto en la entrada texto.
    let nombreIngresado = document.querySelector("#amigo").value;

    console.log(`Nombre ingresado: ${nombreIngresado}`);

    //2. Mostrar alerta si no se ingresó un nombre, si no, actualizar array nombres.
    if (nombreIngresado === ""){
        alert("Ingresa un nombre válido");
    } else {
        nombres.push(nombreIngresado);
        console.log(`Nombres en array: ${nombres}`);
    }
    //3. Limpiar campo de entrada, lo 'reinicia'.
    document.getElementById("amigo").value = '';
    mostrarListaAmigos();
}


//Muestra en una lista los amigos que se van a agregando.
function mostrarListaAmigos() {

    //1. Selecciona la lista
    let lista = document.querySelector("#listaAmigos");

    //2. Limpia la lista
    lista.innerHTML = "";

    //3. Función for recorre el array nombres para agregar cada nombre a una lista que el usuario ve.
    nombres.forEach (function(nombre){
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

//Sorteará un amigo dentro de la lista de manera aleatoria.
function sortearAmigo() {

    //1. Verifica que el array nombres no está vacío.
    if (nombres === "") {
        alert("Ingresa al menos 2 amigos");
    } else {
        //2. Sortea una posición al azar en el array nombres.
        let resultado = Math.floor(Math.random()*nombres.length);

        //3. Muestra el resultado
        let sorteo = document.querySelector("#resultado");
        sorteo.innerHTML = nombres[resultado];
    }

}