document.addEventListener("DOMContentLoaded", function () {
    const buttonEnviar = document.querySelector("button[type='submit']");
    
    // Agregar un evento click al botón "Enviar"
    buttonEnviar.addEventListener("click", function () {
      // Obtener los valores de los campos de entrada
      const nombre = document.getElementById("name").value;
      const mensaje = document.getElementById("text").value;
  
      // Verificar si se ingresó un nombre y un mensaje
      if (nombre && mensaje) {
        // Mostrar un toast de éxito
        Toastify({
          text: "Mensaje enviado con éxito",
          duration: 3000, // Duración en milisegundos
          close: true, // Mostrar botón para cerrar
          gravity: "bottom", // Posición del toast
          position: "right", // Alineación
          backgroundColor: "green", // Color de fondo
          className: "info",
        }).showToast();
      } else {
        // Mostrar un toast de error si falta información
        Toastify({
          text: "Por favor, complete todos los campos",
          duration: 3000,
          close: true,
          gravity: "bottom",
          position: "right",
          backgroundColor: "red",
          className: "info",
        }).showToast();
      }
    });
  });
  