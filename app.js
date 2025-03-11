let listaNombres = []; // Array para almacenar los nombres

function agregarAmigo() {
    let nombreUsuario = document.getElementById("amigo");
    let nombre = nombreUsuario.value.trim(); // Obtener valor y eliminar espacios vacíos

    // Verificar si el input contiene solo números
    if (!isNaN(nombre) || nombre === "") {
        alert("Por favor, ingresa un nombre válido sin números no se puede dejar el espacio en blanco.");
        return; // Detiene la ejecución si es un número o está vacío
    }

    listaNombres.push(nombre); // Agregar al array
    actualizarLista(); // Llamar función para actualizar la interfaz
    document.getElementById("amigo").value = ""; // Limpiar el input
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    listaNombres.forEach(nombreUsua => {

        let li = document.createElement("li");
        li.textContent = nombreUsua;
        console.log(nombreUsua);
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let nombreSorteado = listaNombres[Math.floor(Math.random() * listaNombres.length)];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar resultado anterior

    let li = document.createElement("li");
    li.textContent = `El nombre sorteado es: ${nombreSorteado}`;
    resultadoLista.appendChild(li);
}
function reinicio() {
    // Limpia la lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";
    // Limpia los resultados
    document.getElementById("resultado").innerHTML = "";
    // Limpia el campo de entrada
    document.getElementById("amigo").value = "";
    listaNombres.length = 0;
}
