// Declaramos las funciones que vamos a utilizar

function login() {
  // Obtenemos el valor de los input donde se escriben el nombre y el PIN
  let name = document.querySelector('#name').value;
  let pin = document.querySelector('#pin').value;

  // Añadimos la lógica para validar el PIN. Como viene de un campo de texto, hacemos la comparación con el string '2022'
  if(pin === '2022') {
    // Guardamos la cookie con el nombre de la persona, utilizando un template string
    document.cookie = `name=${name}`;

    // Redirigimos a la persona a la página principal de la app
    location.href = "app.html";

  } else {
    // Seleccionamos el elemento del DOM donde vamos a añadir el mensaje de error
    const loginResultContainer = document.querySelector('#login-result');

    // Indicamos el contenido que vamos a añadir
    loginResultContainer.innerHTML = '<p>PIN Incorrecto. Inténtalo de nuevo</p>';

    // Aplicamos estilos para que se muestre el mensaje de forma destacada y en rojo
    loginResultContainer.classList.add('error-message');
  }
}



// Seleccionamos el botón de "Acceder"
const loginButton = document.querySelector('#loginButton');
// Le añadimos el Event Listener para que, cuando se haga click sobre el elemento, se llame a la función LOGIN
loginButton.addEventListener('click', login);
