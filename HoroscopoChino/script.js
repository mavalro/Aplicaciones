var signos = ['Mono', 'Gallo', 'Perro', 'Jabalí', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra'];

var elementos = ['metal', 'agua', 'madera', 'fuego', 'tierra'];

function calcular(anyo)
{
    var signo, elemento = anyo;
    if ( !/^[0-9]{1,5}$/.test(anyo) ) {
        signo = 'Año no válido, introduce uno diferente.'
    } else {
        anyo = reducir(anyo);
        for (let i in signos) {
            if (anyo == i) {
                signo = signos[i];
            }
        }
    }

    alert(elemento[elemento.length-1]);

    resultado.innerHTML = signo;
}

function reducir(anyo) {
    while (!/^([0-9]|([1][0-1]))$/.test(anyo)) {
        anyo -= 12;
    }
    return anyo;
}

function elemento(anyo) {
    anyo = anyo[anyo.length-1];
}
