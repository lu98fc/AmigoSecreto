// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo(event) {
    // Comprobar si el evento es un clic en el botón o presionar "Enter"
    if (event.type === "click" || (event.key === "Enter")) {
        // Obtener el valor del input
        const inputAmigo = document.getElementById('amigo');
        const nombreAmigo = inputAmigo.value.trim();

        // Verificar si el input no está vacío
        if (nombreAmigo !== "") {
            // Verificar si el nombre ya existe en la lista
            if (!amigos.includes(nombreAmigo)) {
                // Agregar el nombre al array de amigos
                amigos.push(nombreAmigo);

                // Limpiar el input después de agregar el nombre
                inputAmigo.value = "";

                // Actualizar la lista de amigos en la interfaz
                actualizarListaAmigos();

                // Mostrar un mensaje de confirmación
                mostrarMensaje(`Amigo agregado: ${nombreAmigo}`);
            } else {
                // Mostrar un mensaje si el nombre ya existe
                mostrarMensaje("Este nombre ya ha sido añadido.");
            }
        } else {
            // Mostrar una alerta si el input está vacío
            alert("Por favor, ingresa un nombre válido.");
        }
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y agregar cada nombre a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });

    // Verificar si hay al menos dos amigos
    const botonSortear = document.getElementById('boton-sortear');
    if (amigos.length >= 2) {
        botonSortear.disabled = false;  // Habilitar el botón de sortear si hay dos o más amigos
    } else {
        botonSortear.disabled = true;  // Deshabilitar el botón si no hay suficientes amigos
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Verificar si la lista de amigos está vacía
    if (amigos.length === 0) {
        alert("Por favor, ingresa un nombre para poder realizar el sorteo.");
        return;
    }

    // Verificar si hay solo un amigo en la lista
    if (amigos.length === 1) {
        alert("Error al realizar el sorteo. Debes ingresar al menos 2 personas para realizarlo.");
        return;
    }

    // Generar un índice aleatorio basado en la cantidad de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el nombre del amigo sorteado en la interfaz
    mostrarMensaje(`El amigo secreto es: ${amigoSorteado}`);
    
    // Eliminar el nombre sorteado del array de amigos restantes
    amigos.splice(indiceAleatorio, 1);

    // Limpiar la lista de amigos para que quede vacía después del sorteo
    amigos = [];

    // Actualizar la lista de amigos en la interfaz (que ahora estará vacía)
    actualizarListaAmigos();
}

// Función para mostrar mensajes en el elemento de resultado
function mostrarMensaje(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${mensaje}</li>`;
}

// Agregar el evento de "Enter" para agregar amigos
document.getElementById('amigo').addEventListener('keydown', agregarAmigo);

// Agregar el evento de clic para el botón "Añadir"
document.querySelector('.button-add').addEventListener('click', agregarAmigo);
