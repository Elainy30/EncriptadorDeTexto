document.addEventListener('DOMContentLoaded', () => {
    // Conectar las funciones a los botones cuando el DOM haya cargado completamente
    document.getElementById('encryptButton').addEventListener('click', encryptText); // Botón para encriptar
    document.getElementById('decryptButton').addEventListener('click', decryptText); // Botón para desencriptar
    document.getElementById('copyButton').addEventListener('click', copyEncryptedText); // Botón para copiar texto encriptado

    // Función para encriptar el texto ingresado
    function encryptText() {
        const inputText = document.getElementById('inputText').value; // Obtiene el texto del campo de entrada

        // Validación: El campo no debe estar vacío
        if (inputText.trim() === "") {
            displayErrorMessage("El campo no puede estar vacío"); // Mostrar mensaje de error
            return; // Detener la ejecución si la validación falla
        }

        // Validación: Solo se permiten letras minúsculas y espacios
        if (!/^[a-z\s]*$/.test(inputText)) {
            displayErrorMessage("Solo letras minúsculas y sin acentos"); // Mostrar mensaje de error
            return; // Detener la ejecución si la validación falla
        }

        // Realiza el proceso de encriptación según las reglas definidas
        let encryptedText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        // Muestra el texto encriptado en el área de salida
        document.getElementById('outputMessage').textContent = encryptedText;
        document.getElementById('outputMessage1').textContent = ""; // Limpia cualquier mensaje anterior
        document.getElementById('warning').classList.remove('error'); // Remueve estilos de error

        // Actualiza la interfaz: oculta la imagen y muestra el botón "Copiar"
        document.querySelector('.output-section img').style.display = 'none';
        document.getElementById('copyButton').style.display = 'block';
    }

    // Función para desencriptar el texto ingresado
    function decryptText() {
        const inputText = document.getElementById('inputText').value; // Obtiene el texto del campo de entrada

        // Validación: El campo no debe estar vacío
        if (inputText.trim() === "") {
            displayErrorMessage("El campo no puede estar vacío"); // Mostrar mensaje de error
            return; // Detener la ejecución si la validación falla
        }

        // Validación: Solo se permiten letras minúsculas y espacios
        if (!/^[a-z\s]*$/.test(inputText)) {
            displayErrorMessage("Solo letras minúsculas y sin acentos"); // Mostrar mensaje de error
            return; // Detener la ejecución si la validación falla
        }

        // Realiza el proceso de desencriptación según las reglas definidas
        let decryptedText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        // Muestra el texto desencriptado en el área de salida
        document.getElementById('outputMessage').textContent = decryptedText;
        document.getElementById('outputMessage1').textContent = ""; // Limpia cualquier mensaje anterior
        document.getElementById('warning').classList.remove('error'); // Remueve estilos de error

        // Actualiza la interfaz: oculta la imagen y muestra el botón "Copiar"
        document.querySelector('.output-section img').style.display = 'none';
        document.getElementById('copyButton').style.display = 'block';
    }

    // Función para copiar el texto encriptado al portapapeles
    function copyEncryptedText() {
        const encryptedText = document.getElementById('outputMessage').textContent; // Obtiene el texto encriptado

        // Utiliza la API Clipboard para copiar el texto
        navigator.clipboard.writeText(encryptedText).then(() => {
            console.log('Texto copiado al portapapeles'); // Mensaje de confirmación en la consola

            // Cambia temporalmente el estilo del botón para indicar que se copió
            const copyButton = document.getElementById('copyButton');
            copyButton.classList.add('clicked-button');
            setTimeout(() => {
                copyButton.classList.remove('clicked-button'); // Restablece el estilo después de 200 ms
            }, 200);
        }).catch((error) => {
            console.error('Error al copiar texto: ', error); // Muestra el error en la consola si ocurre
        });
    }

    // Función para mostrar mensajes de error
    function displayErrorMessage(message) {
        const warningMessage = document.getElementById('warning'); // Elemento donde se mostrará el mensaje
        warningMessage.textContent = message; // Establece el texto del mensaje de error
        warningMessage.classList.add('error'); // Añade la clase CSS para estilizar el error
    }
});
