function calcular()
{
    var año = document.zodiacoChino.año.value;

    var z1 = 1;      // Gallo
    var z2 = 2;      // Perro
    var z3 = 3;      // Jabalí
    var z4 = 4;      // Rata
    var z5 = 5;      // Buey
    var z6 = 6;      // Tigre
    var z7 = 7;      // Conejo / Gato
    var z8 = 8;      // Dragón
    var z9 = 9;      // Serpiente
    var z10 = 10;    // Caballo
    var z11 = 11;    // Cabra
    var z12 = 12;    // Mono

    var signo;
    if ( año - 0 <= 0 || año - 0 > 999999 ) {
        signo = "Año no válido, introduce uno diferente."
    } else {
        while ( año != z1 && año != z2 && año != z3 && año != z4 && año != z5 && año != z6 && año != z7 && año != z8 && año != z9 && año != z10 && año != z11 && año != z12 )
        {
            año -= 12;
        }
    }
    switch ( año - 0 )
    {
        case 1:
            signo = "Gallo";
            break;
        case 2:
            signo = "Perro";
            break;
        case 3:
            signo = "Jabalí";
            break;
        case 4:
            signo = "Rata";
            break;
        case 5:
            signo = "Buey";
            break;
        case 6:
            signo = "Tigre";
            break;
        case 7:
            signo = "Conejo";
            break;
        case 8:
            signo = "Dragón";
            break;
        case 9:
            signo = "Serpiente";
            break;
        case 10:
            signo = "Caballo";
            break;
        case 11:
            signo = "Cabra";
            break;
        case 12:
            signo = "Mono";
            break;
        default:
            signo = "Año no válido, introduce uno diferente.";
            break;
    }
    document.getElementById("demo").innerHTML = signo;
}
