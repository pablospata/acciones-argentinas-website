/*
Primer Pre-Entrega del Proyecto Final
Curso: JavaScript en Coderhouse
Estudiante: SPATA, Pablo Leonardo

El siguiente código calcula el precio promedio de una acción basándose en ciertos días de cotizaciones. En términos financieros, este cálculo se conoce comúnmente como 'Media Móvil'.

El objetivo del proyecto final será desarrollar una aplicación web que pueda monitorear en tiempo real las distintas cotizaciones del mercado de valores. Esto se intentará realizar mediante la implementación de llamadas a una API bursátil.

Además, la aplicación permitirá realizar diferentes cálculos y análisis basados en las cotizaciones obtenidas, brindando al usuario la posibilidad de filtrar los resultados de acuerdo a sus necesidades o preferencias.
*/

/**
 * Función para ingresar las cotizaciones del usuario.
 * Crea un array para almacenar las cotizaciones, luego solicita las cotizaciones una a una al usuario.
 * Verifica que el usuario introduzca sólo números y permite dejar de introducir cotizaciones al ingresar un espacio vacío.
 * Imprime las cotizaciones ingresadas al documento.
 * @returns {Array} - Devuelve un array de cotizaciones en formato float.
 */
function ingresarCotizaciones() {
    let cotizaciones = [];
    let continuar = true;

    let n = 1;
    while (continuar) {
        let cotizacion = prompt(` === Bienvenido al Scanner de Cotizaciones === \nPor favor, ingrese una cotizacion o deje espacio para terminar. \nDía ${n}:`);

        if (cotizacion.toLowerCase() === "") {
            continuar = false;
        } else if (isNaN(cotizacion)) {
            alert('Por favor, solo ingrese numeros');
        } else {
            cotizaciones.push(parseFloat(cotizacion));
            n++;
        }
    }

    document.write(`
    <h1>Scanner de Acciones del Mercado Argentino</h1>
    <h2>Primer Entrega - Simulador Interactivo</h2>
    <br>
    Las cotizaciones ingresadas fueron: <br>`);

    for (let i = 0; i < cotizaciones.length; i++) {
        document.write(`${i + 1}. ${cotizaciones[i]}<br>`);
    }

    return cotizaciones;
}

/**
 * Función para obtener un número entero del usuario.
 * Solicita al usuario que introduzca un número.
 * @returns {number} - Devuelve el número ingresado por el usuario.
 */
function obtenerNumero() {
    return parseInt(prompt('Ingrese un numero entero para calcular el promedio: '));
}

/**
 * Función para validar el número introducido por el usuario.
 * Verifica que el número ingresado sea un entero válido y que no sea mayor que la cantidad de cotizaciones.
 * También verifica que el número no sea cero o negativo.
 * @param {number} numero - El número introducido por el usuario.
 * @param {number} cantidadCotizaciones - La cantidad de cotizaciones introducidas por el usuario.
 * @returns {boolean} - Devuelve verdadero si el número es válido, de lo contrario, devuelve falso.
 */
function validarNumero(numero, cantidadCotizaciones) {
    if (isNaN(numero) || !Number.isInteger(numero)) {
        alert('No es un numero valido. Por favor, introduzca un numero entero.');
        return false;
    }

    if (numero > cantidadCotizaciones) {
        alert('El número ingresado es mayor que la cantidad de cotizaciones. Por favor, introduzca un número menor o igual a ' + cantidadCotizaciones);
        return false;
    }
    if (numero <= 0) {
        alert('El número ingresado no puede ser negativo ni cero. Por favor, introduzca un número entero positivo.');
        return false;
    }

    return true;
}

/**
 * Función para solicitar al usuario un entero válido.
 * Utiliza las funciones obtenerNumero y validarNumero para obtener y validar el número introducido por el usuario.
 * Repite la solicitud hasta que se introduce un número válido.
 * @param {number} cantidadCotizaciones - La cantidad de cotizaciones introducidas por el usuario.
 * @returns {number} - Devuelve un número entero válido.
 */
function solicitaEntero(cantidadCotizaciones) {
    let numero;
    do {
        numero = obtenerNumero(); 
    } while (!validarNumero(numero, cantidadCotizaciones));

    return numero;
}

/**
 * Función para calcular el precio promedio de las cotizaciones en los últimos días especificados.
 * Suma las cotizaciones de los últimos días especificados y divide por la cantidad de días para obtener el promedio.
 * Imprime el precio promedio al documento.
 * @param {number} dias - La cantidad de días para los que calcular el precio promedio.
 * @param {Array} cotizaciones - El array de cotizaciones introducidas por el usuario.
 */
function calcularPromedio(dias, cotizaciones) {

    let promedio;
    let suma = 0;

    for (let i = cotizaciones.length - 1; i >= cotizaciones.length - dias; i--) {
        suma += cotizaciones[i];
    }

    promedio = suma / dias;

    document.write(`<p>El precio promedio de los ultimos ${dias} dias es: ${promedio}</p>`);
}


/**
 * Inicio de la app. Cuando el DOM está completamente cargado, llama a la función ingresarCotizaciones para obtener las cotizaciones del usuario.
 * Luego pregunta al usuario si desea calcular el precio promedio.
 * Si el usuario confirma, solicita el número de días para calcular el promedio y luego llama a la función calcularPromedio.
 */
document.addEventListener("DOMContentLoaded", () => {

    let cotizacionesIngresadas = ingresarCotizaciones();

    let respuesta = confirm('¿Desea calcular el precio promedio de las cotizaciones ingresadas?')

    if (respuesta) {
        let diasPromedio = solicitaEntero(cotizacionesIngresadas.length);
        calcularPromedio(diasPromedio, cotizacionesIngresadas);
    }
    else {
        alert('Entendido. Que tenga un buen dia.')
    }
});