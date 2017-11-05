var signos = ['Mono', 'Gallo', 'Perro', 'Jabalí', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra'];

function calcular(anyo)
{
    var signo;
    if ( !/^[0-9]+$/.test(anyo) ) {
        signo = 'Año no válido, introduce uno diferente.'
    } else {
        signo='calculando...';
    }


    resultado.innerHTML = signo;
}
