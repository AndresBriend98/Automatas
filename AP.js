// Matriz de transición
const matrizTransicion = [
    [0.4, 0.3, 0.3],  // Probabilidades de transición del estado 1 al estado 1, 2 y 3 respectivamente
    [0.2, 0.6, 0.2],  // Probabilidades de transición del estado 2 al estado 1, 2 y 3 respectivamente
    [0.1, 0.1, 0.8]   // Probabilidades de transición del estado 3 al estado 1, 2 y 3 respectivamente
];

// Vector de probabilidades iniciales
const vectorInicial = [0.0, 0.0, 1.0];  // Representa las probabilidades iniciales de estar en cada estado al inicio

// Función para calcular la probabilidad
function calcularProbabilidad(secuencia) {
    // Convertir la secuencia de eventos a un arreglo de números
    secuencia = secuencia.split(',').map(Number);
    // Inicializar la probabilidad con la probabilidad inicial del primer estado en la secuencia
    let probabilidad = vectorInicial[secuencia[0] - 1];

    // Calcular la probabilidad total de la secuencia multiplicando las probabilidades de transición
    for (let i = 1; i < secuencia.length; i++) {
        probabilidad *= matrizTransicion[secuencia[i - 1] - 1][secuencia[i] - 1];
    }

    // Convertir el resultado a formato porcentual y redondear a 4 decimales
    return (probabilidad * 100).toFixed(4);  // Multiplicamos por 100 para obtener el resultado en porcentaje
}

// Función para calcular la probabilidad y mostrar el resultado en la interfaz
function mostrarResultado() {
    // Obtener la secuencia ingresada por el usuario desde la interfaz
    const secuencia = document.getElementById("secuencia").value;
    // Calcular la probabilidad para la secuencia ingresada
    const resultado = calcularProbabilidad(secuencia);
    // Mostrar el resultado en la interfaz
    document.getElementById("resultado").innerText = "Resultado: " + resultado + "%";
}
