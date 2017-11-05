var caballo = 1, perro = 2;      // Perro
var jabali = 3;      // Jabalí
var z4 = 4;      // Rata
var z5 = 5;      // Buey
var z6 = 6;      // Tigre
var z7 = 7;      // Conejo / Gato
var z8 = 8;      // Dragón
var z9 = 9;      // Serpiente
var z10 = 10;    // Caballo
var z11 = 11;    // Cabra
var z12 = 12;    // Mono


function calcular(anyo)
{


    var signo;
    if ( /^[0-9]+$/.test(anyo) ) {
        signo = 'Año no válido, introduce uno diferente.'
    } else {
        while ( anyo > 12 )
        {
            anyo -= 12;
        }
    }
    switch ( anyo - 0 )
    {
        case 1:
            signo = 'Gallo';
            break;
        case 2:
            signo = 'Perro';
            break;
        case 3:
            signo = 'Jabalí';
            break;
        case 4:
            signo = 'Rata';
            break;
        case 5:
            signo = 'Buey';
            break;
        case 6:
            signo = 'Tigre';
            break;
        case 7:
            signo = 'Conejo';
            break;
        case 8:
            signo = 'Dragón';
            break;
        case 9:
            signo = 'Serpiente';
            break;
        case 10:
            signo = 'Caballo';
            break;
        case 11:
            signo = 'Cabra';
            break;
        case 12:
            signo = 'Mono';
            break;
        default:
            signo = 'Año no válido, introduce uno diferente.';
            break;
    }
    resultado.innerHTML = signo;
}
