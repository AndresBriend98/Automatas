// Definir el autómata finito no determinista
const automata = {
  alfabeto: ['a', 'b'], // Alfabeto de entrada del autómata
  estados: ['q0', 'q1', 'q2', 'q3', 'q4'], // Conjunto de estados del autómata
  transiciones: { // Funciones de transición del autómata
    'q0': { 'a': ['q1'] },
    'q1': { 'b': ['q2'] },
    'q2': { 'a': ['q3'], 'b': ['q2', 'q4'] },
    'q3': { 'b': ['q2'] },
    'q4': { 'a': ['q3'], 'b': ['q2', 'q4'] }
  },
  estadoInicial: 'q0', // Estado inicial del autómata
  estadosFinales: ['q3'] // Estado(s) final(es) o de aceptación del autómata
};

// Función para verificar si una cadena es aceptada por el autómata
function verificarCadena() {
  const cadena = document.getElementById('cadenaInput').value.trim(); // Obtener la cadena de entrada del usuario y eliminar espacios en blanco al principio y al final

  let estadosActuales = [automata.estadoInicial]; // Inicializar los estados actuales con el estado inicial del autómata

  // Iterar sobre cada símbolo de la cadena
  for (let i = 0; i < cadena.length; i++) {
    const simbolo = cadena[i]; // Obtener el símbolo actual

    let nuevosEstados = []; // Almacenar los nuevos estados alcanzables con el símbolo actual

    // Iterar sobre cada estado actual
    for (let j = 0; j < estadosActuales.length; j++) {
      const estadoActual = estadosActuales[j]; // Obtener el estado actual

      // Verificar si hay transiciones definidas para el estado actual y el símbolo actual
      if (automata.transiciones[estadoActual][simbolo]) {
        nuevosEstados.push(...automata.transiciones[estadoActual][simbolo]); // Agregar los estados alcanzables a través de la transición
      }
    }

    // Actualizar los estados actuales con los nuevos estados alcanzables
    estadosActuales = nuevosEstados;

    // Si no hay estados alcanzables para el símbolo actual, la cadena es rechazada
    if (estadosActuales.length === 0) {
      mostrarResultado('Cadena rechazada');
      return;
    }
  }

  // Verificar si al menos uno de los estados actuales es un estado final
  const cadenaAceptada = estadosActuales.some(estado => automata.estadosFinales.includes(estado));

  // Mostrar el resultado basado en si la cadena es aceptada o no
  if (cadenaAceptada) {
    mostrarResultado('Cadena aceptada');
  } else {
    mostrarResultado('Cadena rechazada');
  }
}

// Función para mostrar el resultado en la página HTML
function mostrarResultado(resultado) {
  document.getElementById('resultado').innerText = resultado; // Establecer el texto del elemento HTML con el resultado
}
