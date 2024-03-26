// Definir el autómata finito determinista
const automata = {
  alfabeto: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], // Alfabeto de entrada del autómata
  estados: ['a', 'b', 'c'], // Conjunto de estados del autómata
  transiciones: { // Funciones de transición del autómata
    'a': { '0': 'b', '1': 'c', '2': 'b', '3': 'c', '4': 'b', '5': 'c', '6': 'b', '7': 'c', '8': 'b', '9': 'c' },
    'b': { '0': 'b', '1': 'c', '2': 'b', '3': 'c', '4': 'b', '5': 'c', '6': 'b', '7': 'c', '8': 'b', '9': 'c' },
    'c': { '0': 'b', '1': 'c', '2': 'b', '3': 'c', '4': 'b', '5': 'c', '6': 'b', '7': 'c', '8': 'b', '9': 'c' }
  },
  estadoInicial: 'a', // Estado inicial del autómata
  estadosFinales: ['c'] // Estado final o de aceptación del autómata
};

// Función para verificar si una cadena es aceptada por el autómata
function verificarCadena() {
  const cadena = document.getElementById('cadenaInput').value.trim(); // Obtener la cadena de entrada del usuario y eliminar espacios en blanco al principio y al final
  const cadenaSeparada = cadena.split(',').map(item => item.trim()); // Separar la cadena en símbolos individuales y eliminar espacios en blanco alrededor de cada símbolo

  let estadoActual = automata.estadoInicial; // Inicializar el estado actual con el estado inicial del autómata

  // Iterar sobre cada símbolo de la cadena
  for (let i = 0; i < cadenaSeparada.length; i++) {
    const simbolo = cadenaSeparada[i]; // Obtener el símbolo actual
    // Verificar si existe una transición definida para el estado actual y el símbolo actual
    if (!automata.transiciones[estadoActual][simbolo]) {
      mostrarResultado('Cadena rechazada'); // Si no hay una transición definida, la cadena es rechazada
      return; // Salir de la función
    }
    estadoActual = automata.transiciones[estadoActual][simbolo]; // Actualizar el estado actual con el estado alcanzado por la transición
  }

  // Verificar si el estado actual es un estado final
  if (automata.estadosFinales.includes(estadoActual)) {
    mostrarResultado('Cadena aceptada'); // Si el estado actual es un estado final, la cadena es aceptada
  } else {
    mostrarResultado('Cadena rechazada'); // Si el estado actual no es un estado final, la cadena es rechazada
  }
}

// Función para mostrar el resultado en la página HTML
function mostrarResultado(resultado) {
  document.getElementById('resultado').innerText = resultado; // Establecer el texto del elemento HTML con el resultado
}
