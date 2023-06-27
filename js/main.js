/*
Primer Pre-Entrega del Proyecto Final
Curso: JavaScript en Coderhouse
Estudiante: SPATA, Pablo Leonardo

El siguiente código calcula el precio promedio de una acción basándose en ciertos días de cotizaciones. En términos financieros, este cálculo se conoce comúnmente como 'Media Móvil'.

El objetivo del proyecto final será desarrollar una aplicación web que pueda monitorear en tiempo real las distintas cotizaciones del mercado de valores. Esto se intentará realizar mediante la implementación de llamadas a una API bursátil.

Además, la aplicación permitirá realizar diferentes cálculos y análisis basados en las cotizaciones obtenidas, brindando al usuario la posibilidad de filtrar los resultados de acuerdo a sus necesidades o preferencias.
*/


function ingresarCotizaciones() {
    let cotizaciones = [];
    let continuar = true;

    let n = 1;
    while (continuar) {        
        let cotizacion = prompt(` ======= Bienvenido ======= \nPor favor, ingrese una cotizacion o deje espacio para terminar. \nNro. ${n}:`);

        if (cotizacion.toLowerCase() === "") {
            continuar = false;
        } else if (isNaN(cotizacion)) {
            alert('Por favor, solo ingrese numeros');
        } else {
            cotizaciones.push(parseFloat(cotizacion));
            n++;
        }
    }

    document.write(`Las cotizaciones ingresadas fueron: <br>`);

    for (let i = 0; i < cotizaciones.length; i++) {
        document.write(`${i + 1}. ${cotizaciones[i]}<br>`);
    }

    return cotizaciones;
}

function calcularPromedio(dias) {

    let promedio;
    let suma;

    for (let i = 0; i < dias; i++) {
        document.write(`${i}<br>`);
    }

    document.write(`<br>El precio promedio de los ultimos ${dias}<br><br> dias es: ${promedio}`);
}

function solicitaEntero() {
    let numero = parseInt(prompt('Ingrese un numero entero para calcular el promedio: '));

    while(isNaN(numero) || !Number.isInteger(numero))
        alert('No es un numero valido');
        numero = parseInt(prompt('Ingrese un numero entero para calcular el promedio: '));
}


let cotizaciones = ingresarCotizaciones();

let respuesta = confirm('¿Desea calcular el precio promedio de las cotizaciones ingresadas?')

if (respuesta) {
    let diasPromedio = solicitaEntero();
    calcularPromedio(diasPromedio);
}
else {
    alert('Entendido. Que tenga un buen dia.')
}
