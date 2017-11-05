var signos = ['Mono', 'Gallo', 'Perro', 'Jabalí', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra'];

function calcular(anyo)
{
    var signo;
    if ( !/^[0-9]+$/.test(anyo) ) {
        signo = 'Año no válido, introduce uno diferente.'
    } else {

        anyo = reducir(anyo);
        for (let i in signos) {
            if (anyo == i) {
                signo = signos[i];
            }
        }
    }


    resultado.innerHTML = signo;
}

function reducir(input) {
    while (!/^([0-9]|([1][0-1]))$/.test(input)) {
        input -= 12;
    }
    return input;
}
