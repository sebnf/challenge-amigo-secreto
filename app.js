// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo(){

    //Capturar nombre amigo secreto en la entrada texto
    let nombreIngresado = document.querySelector("#amigo").value;

    console.log(`Nombre ingresado: ${nombreIngresado}`);

    //Mostrar alerta si no se ingresó un nombre, si no, actualizar array nombres
    if (nombreIngresado === ''){
        alert('Ingresa un nombre válido');
    } else {
        nombres.push(nombreIngresado);
        console.log(`Nombres en array: ${nombres}`);
    }
    //Limpiar campo de entrada
    document.getElementById("amigo").value = '';
}