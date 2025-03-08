let listaNombres = []; // Array para almacenar los nombres

function agregarAmigo() {
    let nombreInput = document.getElementById("amigo"); 
    let nombre = nombreInput.value.trim(); // Obtener valor y eliminar espacios

    if (nombre !== "") {
        listaNombres.push(nombre); // Agregar el nombre al array
        actualizarLista(); // Mostrar en <ul>
        nombreInput.value = ""; // Limpiar input
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    listaNombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaNombres.length < 2) {
        alert("Debes ingresar al menos 2 nombres para sortear.");
        return;
    }

    let listaSorteo = [...listaNombres]; // Copia del array
    listaSorteo.sort(() => Math.random() - 0.5); // Mezclar aleatoriamente

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar antes de actualizar

    listaSorteo.forEach((nombre, index) => {
        let siguiente = listaSorteo[(index + 1) % listaSorteo.length]; // Ciclo de amigos
        let li = document.createElement("li");
        li.textContent = `${nombre} → ${siguiente}`;
        resultadoLista.appendChild(li);
    });
}
