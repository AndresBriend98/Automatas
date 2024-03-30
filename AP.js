// Matriz de transición
var matrizTransicion = [
    [0.4, 0.3, 0.3],
    [0.2, 0.6, 0.2],
    [0.1, 0.1, 0.8]
];

// Vector de probabilidades iniciales
var vectorInicial = [0.0, 0.0, 1.0];

// Función para calcular la probabilidad
function calcularProbabilidad(secuencia) {
    secuencia = secuencia.split(',').map(Number);
    var probabilidad = vectorInicial[secuencia[0] - 1];

    for (var i = 1; i < secuencia.length; i++) {
        probabilidad *= matrizTransicion[secuencia[i - 1] - 1][secuencia[i] - 1];
    }

    // Convertir el resultado a formato decimal
    return (probabilidad * 100).toFixed(4); // Multiplicamos por 100 para convertir a porcentaje y ajustamos el número de decimales según tus necesidades
}

// Función para calcular la probabilidad y mostrar el resultado en la interfaz
function mostrarResultado() {
    var secuencia = document.getElementById("secuencia").value;
    var resultado = calcularProbabilidad(secuencia);
    document.getElementById("resultado").innerText = "Resultado: " + resultado + "%";
}
